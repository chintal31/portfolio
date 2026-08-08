"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedWrapper } from "../ui";

type Tier = 1 | 2 | 3;

type Pill = {
  label: string;
  tier: Tier;
};

type Body = {
  element: HTMLButtonElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularVelocity: number;
  width: number;
  height: number;
  mass: number;
  hasEnteredField: boolean;
};

const pills: Pill[] = [
  "Figma (Expert)",
  "Design Systems",
  "User-Centered Design",
  "Prototyping",
  "Interaction Design",
  "Usability Testing",
  "Vibe Coding",
  "Design Thinking",
  "Cross-Platform UX",
  "Stakeholder Management",
  "Agile / Scrum",
  "Journey Mapping",
].map((label, index) => ({ label, tier: ((index % 3) + 1) as Tier }));

const massByTier: Record<Tier, number> = { 1: 2.4, 2: 1.5, 3: 1 };
const PHYSICS = {
  restitution: 0.35,
  friction: 0.4,
  gravity: 1,
  mouseStiffness: 0.2,
  settleSpeed: 70,
};

export default function WhatImGoodAt() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [dropCount, setDropCount] = useState(0);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    let bodies: Body[] = [];
    let frame = 0;
    let previousTime = 0;
    let isActive = false;
    let hasStarted = false;
    let draggedIndex: number | null = null;
    let dragTarget: { x: number; y: number } | null = null;

    const paint = () => {
      bodies.forEach(body => {
        body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}deg)`;
      });
    };

    const createBodies = () => {
      const bounds = field.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      if (hasStarted) {
        bodies.forEach(body => {
          body.x = Math.max(
            10,
            Math.min(bounds.width - body.width - 10, body.x)
          );
          body.y = Math.max(
            10,
            Math.min(bounds.height - body.height - 10, body.y)
          );
        });
        paint();
        return;
      }

      bodies = pillRefs.current.flatMap((element, index) => {
        if (!element) return [];
        const tier = pills[index]?.tier ?? 3;
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const laneWidth = (bounds.width - 20) / pills.length;
        const laneCenter = 10 + laneWidth * (index + 0.5);
        const laneJitter = (Math.random() - 0.5) * laneWidth * 0.3;
        return [
          {
            element,
            x: Math.max(
              10,
              Math.min(
                bounds.width - width - 10,
                laneCenter - width / 2 + laneJitter
              )
            ),
            y: -50 - Math.random() * 400,
            vx: (Math.random() - 0.5) * 34,
            vy: 30 + (index % 4) * 18,
            angle: ((index * 17) % 18) - 9,
            angularVelocity: ((index % 5) - 2) * 14,
            width,
            height,
            mass: massByTier[tier],
            hasEnteredField: false,
          },
        ];
      });
      paint();
    };

    const resolveCollision = (first: Body, second: Body) => {
      const firstCenterX = first.x + first.width / 2;
      const firstCenterY = first.y + first.height / 2;
      const secondCenterX = second.x + second.width / 2;
      const secondCenterY = second.y + second.height / 2;
      const overlapX =
        (first.width + second.width) / 2 -
        Math.abs(firstCenterX - secondCenterX);
      const overlapY =
        (first.height + second.height) / 2 -
        Math.abs(firstCenterY - secondCenterY);
      if (overlapX <= 0 || overlapY <= 0) return;

      const horizontal = overlapX < overlapY;
      const direction = horizontal
        ? Math.sign(secondCenterX - firstCenterX) || 1
        : Math.sign(secondCenterY - firstCenterY) || 1;
      const overlap = horizontal ? overlapX : overlapY;
      const firstPinned =
        draggedIndex !== null && bodies[draggedIndex] === first;
      const secondPinned =
        draggedIndex !== null && bodies[draggedIndex] === second;
      const firstInverseMass = firstPinned ? 0 : 1 / first.mass;
      const secondInverseMass = secondPinned ? 0 : 1 / second.mass;
      const totalInverseMass = firstInverseMass + secondInverseMass;
      if (!totalInverseMass) return;

      const separation = overlap / totalInverseMass;
      if (horizontal) {
        first.x -= direction * separation * firstInverseMass;
        second.x += direction * separation * secondInverseMass;
      } else {
        first.y -= direction * separation * firstInverseMass;
        second.y += direction * separation * secondInverseMass;
      }

      const firstVelocity = horizontal ? first.vx : first.vy;
      const secondVelocity = horizontal ? second.vx : second.vy;
      const relativeVelocity = secondVelocity - firstVelocity;
      if (relativeVelocity * direction >= 0) return;
      if (Math.abs(relativeVelocity) < PHYSICS.settleSpeed) {
        if (horizontal) {
          first.vx *= 1 - PHYSICS.friction;
          second.vx *= 1 - PHYSICS.friction;
        } else if (direction > 0) {
          // The first pill is resting on the second one.
          first.vy = 0;
        } else {
          // The second pill is resting on the first one.
          second.vy = 0;
        }
        return;
      }
      const impulse =
        (-(1 + PHYSICS.restitution) * relativeVelocity) / totalInverseMass;
      if (horizontal) {
        first.vx -= direction * impulse * firstInverseMass;
        second.vx += direction * impulse * secondInverseMass;
      } else {
        first.vy -= direction * impulse * firstInverseMass;
        second.vy += direction * impulse * secondInverseMass;
      }
    };

    const keepInBounds = (body: Body, bounds: DOMRect) => {
      const radians = (body.angle * Math.PI) / 180;
      const rotatedWidth =
        Math.abs(body.width * Math.cos(radians)) +
        Math.abs(body.height * Math.sin(radians));
      const rotatedHeight =
        Math.abs(body.width * Math.sin(radians)) +
        Math.abs(body.height * Math.cos(radians));
      const horizontalInset = (rotatedWidth - body.width) / 2;
      const verticalInset = (rotatedHeight - body.height) / 2;
      const minX = 10 + horizontalInset;
      const maxX = bounds.width - body.width - 10 - horizontalInset;
      const minY = 10 + verticalInset;
      const maxY = bounds.height - body.height - 10 - verticalInset;

      if (body.x < minX) {
        body.x = minX;
        body.vx = Math.abs(body.vx) * 0.45;
        body.angularVelocity *= -0.6;
      } else if (body.x > maxX) {
        body.x = maxX;
        body.vx = -Math.abs(body.vx) * 0.45;
        body.angularVelocity *= -0.6;
      }

      if (body.y < minY) {
        body.y = minY;
        if (body.vy < 0) body.vy = Math.abs(body.vy) * PHYSICS.restitution;
      } else if (body.y > maxY) {
        body.y = maxY;
        body.vy *= -PHYSICS.restitution;
        body.angularVelocity *= 1 - PHYSICS.friction;
        if (Math.abs(body.vy) < 30) body.vy = 0;
      }
    };

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      if (!isActive || !bodies.length) return;
      const delta = Math.min((time - previousTime) / 1000 || 0, 0.025);
      previousTime = time;
      const bounds = field.getBoundingClientRect();

      bodies.forEach((body, index) => {
        if (index === draggedIndex) {
          if (dragTarget) {
            body.x += (dragTarget.x - body.x) * PHYSICS.mouseStiffness;
            body.y += (dragTarget.y - body.y) * PHYSICS.mouseStiffness;
          }
          keepInBounds(body, bounds);
          return;
        }
        body.vy += 1150 * PHYSICS.gravity * delta;
        body.x += body.vx * delta;
        body.y += body.vy * delta;
        body.angle += body.angularVelocity * delta;
        const damping = Math.pow(1 - PHYSICS.friction, delta * 60);
        body.vx *= damping;
        body.angularVelocity *= damping;

        if (!body.hasEnteredField && body.y >= 0) body.hasEnteredField = true;
        // Pills begin above the field, but its four edges become hard limits
        // as soon as each pill enters it.
        if (body.hasEnteredField) keepInBounds(body, bounds);
      });

      for (let first = 0; first < bodies.length; first += 1) {
        for (let second = first + 1; second < bodies.length; second += 1) {
          resolveCollision(bodies[first]!, bodies[second]!);
        }
      }
      bodies.forEach(body => {
        if (body.hasEnteredField) keepInBounds(body, bounds);
      });
      paint();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        hasStarted = true;
        isActive = true;
        previousTime = performance.now();
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    const resizeObserver = new ResizeObserver(createBodies);
    observer.observe(field);
    resizeObserver.observe(field);
    createBodies();
    frame = requestAnimationFrame(tick);

    const startDrag = (index: number, event: PointerEvent) => {
      const body = bodies[index];
      if (!body) return;
      const bounds = field.getBoundingClientRect();
      draggedIndex = index;
      body.hasEnteredField = true;
      dragTarget = {
        x: event.clientX - bounds.left - body.width / 2,
        y: event.clientY - bounds.top - body.height / 2,
      };
      body.element.setPointerCapture(event.pointerId);
      body.vx = 0;
      body.vy = 0;
      body.angularVelocity = 0;
      body.x = dragTarget.x;
      body.y = dragTarget.y;
      keepInBounds(body, bounds);
    };
    const moveDrag = (index: number, event: PointerEvent) => {
      if (draggedIndex !== index) return;
      const body = bodies[index];
      if (!body) return;
      const bounds = field.getBoundingClientRect();
      dragTarget = {
        x: event.clientX - bounds.left - body.width / 2,
        y: event.clientY - bounds.top - body.height / 2,
      };
    };
    const endDrag = (index: number, event: PointerEvent) => {
      if (draggedIndex !== index) return;
      const body = bodies[index];
      if (body?.element.hasPointerCapture(event.pointerId)) {
        body.element.releasePointerCapture(event.pointerId);
      }
      draggedIndex = null;
      dragTarget = null;
    };

    const abortController = new AbortController();
    pillRefs.current.forEach((element, index) => {
      element?.addEventListener(
        "pointerdown",
        event => startDrag(index, event),
        {
          signal: abortController.signal,
        }
      );
      element?.addEventListener(
        "pointermove",
        event => moveDrag(index, event),
        {
          signal: abortController.signal,
        }
      );
      element?.addEventListener("pointerup", event => endDrag(index, event), {
        signal: abortController.signal,
      });
      element?.addEventListener(
        "pointercancel",
        event => endDrag(index, event),
        {
          signal: abortController.signal,
        }
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      abortController.abort();
    };
  }, [dropCount]);

  return (
    <section
      className="what-im-good-at"
      aria-labelledby="what-im-good-at-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="what-im-good-at-heading">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <h2
              id="what-im-good-at-title"
              className="font-display text-[28px] font-medium leading-tight text-[#222222] md:text-[32px] lg:text-[40px] xl:text-[48px]"
            >
              What I&apos;m Good At
            </h2>
          </AnimatedWrapper>
        </div>
      </div>
      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <div className="what-im-good-at-field-wrap mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="what-im-good-at-field" ref={fieldRef}>
          <button
            className="what-im-good-at-reset cursor-hover"
            onClick={() => setDropCount(count => count + 1)}
            type="button"
          >
            Drop again
          </button>
          {pills.map((pill, index) => (
            <button
              className={`what-im-good-at-pill what-im-good-at-pill-tier-${pill.tier} cursor-hover`}
              key={pill.label}
              ref={element => {
                pillRefs.current[index] = element;
              }}
              type="button"
            >
              {pill.label}
            </button>
          ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
