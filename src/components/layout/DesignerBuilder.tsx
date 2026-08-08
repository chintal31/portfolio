"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedWrapper } from "../ui";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  title: string;
  tags: string[];
  previewClass: string;
  ctaLabel?: string;
  statusLabel?: string;
  gifSrc?: string;
  imageSrc?: string;
  imageClass?: string;
  videoSrc?: string;
  posterSrc?: string;
  mediaClass?: string;
  previewKind?: "substack-mood" | "substack-vibe";
  loopVideo?: boolean;
  href?: string;
};

const projects: Record<"ai" | "writing", Project[]> = {
  ai: [
    {
      id: "ai-project-1",
      title: "Nounsense - Der Die Das game",
      tags: ["AI experiment", "Language game"],
      previewClass: "bg-[#d6f1fd]",
      videoSrc: "/videos/nounsense-preview.mp4",
      posterSrc: "/images/about/nounsense-poster.jpg",
      mediaClass: "designer-builder-media-nounsense",
      loopVideo: true,
      href: "https://nounsense.vercel.app/",
    },
    {
      id: "ai-project-2",
      title: "Verb Wheel - German Irregular verb game",
      tags: ["AI experiment", "Learning tool"],
      previewClass: "bg-[#dcdcff]",
      videoSrc: "/videos/verb-wheel-preview.mp4",
      posterSrc: "/images/about/verb-wheel-poster.jpg",
      mediaClass: "designer-builder-media-verb-wheel",
      loopVideo: true,
    },
    {
      id: "ai-project-3",
      title: "Mood board generator",
      tags: ["AI experiment", "Creative tool"],
      previewClass: "bg-[#fffbd2]",
      videoSrc: "/videos/mood-board-preview.mp4",
      posterSrc: "/images/about/mood-board-poster.jpg",
      loopVideo: true,
      statusLabel: "Personal project",
    },
    {
      id: "ai-project-4",
      title: "Spiral text string",
      tags: ["Creative coding", "Typography"],
      previewClass: "bg-[#ffd9d9]",
      videoSrc: "/videos/spiral-text-preview.mp4",
      posterSrc: "/images/about/spiral-text-poster.jpg",
      loopVideo: true,
      statusLabel: "Personal project",
    },
  ],
  writing: [
    {
      id: "writing-1",
      title: "I moved to Germany and suddenly became a beginner again",
      tags: ["Writing", "Substack"],
      previewClass: "designer-builder-substack-cover-bg",
      imageSrc: "/images/about/germany-beginner-cover.png",
      imageClass: "designer-builder-media-substack-cover",
      ctaLabel: "Read article",
      href: "https://open.substack.com/pub/jashvi1/p/i-moved-to-germany-and-suddenly-became?r=u424i&utm_campaign=post-expanded-share&utm_medium=web",
    },
    {
      id: "writing-2",
      title: "I vibe coded my first real product",
      tags: ["Writing", "Substack"],
      previewClass: "designer-builder-substack-cover-bg",
      previewKind: "substack-vibe",
      imageSrc: "/images/about/vibe-coded-cover.png",
      imageClass: "designer-builder-media-substack-cover",
      ctaLabel: "Read article",
      href: "https://jashvi1.substack.com/p/i-vibe-coded-my-first-real-product?r=u424i",
    },
    {
      id: "writing-3",
      title: "Mood to Moodboard",
      tags: ["Writing", "Substack"],
      previewClass: "designer-builder-substack-cover-bg",
      previewKind: "substack-mood",
      imageSrc: "/images/about/mood-to-moodboard-cover.png",
      imageClass: "designer-builder-media-substack-cover",
      ctaLabel: "Read article",
      href: "https://open.substack.com/pub/jashvi1/p/mood-to-moodboard?r=u424i&utm_campaign=post-expanded-share&utm_medium=web",
    },
  ],
};

export default function DesignerBuilder() {
  const [activeTab, setActiveTab] = useState<"ai" | "writing">("ai");
  const stackFrameRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeProjects = projects[activeTab];

  useLayoutEffect(() => {
    const stackFrame = stackFrameRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLElement => card !== null
    );
    if (!stackFrame || cards.length < 2) return;

    const context = gsap.context(() => {
      const mediaQuery = window.matchMedia(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
      );
      if (!mediaQuery.matches) return;

      const pauseAllVideos = () => {
        videoRefs.current.forEach(video => video?.pause());
      };
      let activeMediaIndex = -1;
      const stopAllMedia = () => {
        pauseAllVideos();
        activeMediaIndex = -1;
      };
      const activateMedia = (index: number, restart = false) => {
        if (activeMediaIndex === index && !restart) {
          const activeVideo = videoRefs.current[index];
          if (activeVideo?.paused) {
            void activeVideo.play().catch(() => undefined);
          }
          return;
        }

        pauseAllVideos();
        activeMediaIndex = index;
        const video = videoRefs.current[index];
        if (!video) return;

        video.currentTime = 0;
        void video.play().catch(() => undefined);
      };
      const mediaIndexForProgress = (progress: number) =>
        Math.min(cards.length - 1, Math.round(progress * (cards.length - 1)));
      let activeCardIndex = 0;

      gsap.set(cards, {
        x: index => index * 50,
        scale: 1,
        opacity: index => 1 - index * 0.13,
        zIndex: index => cards.length - index,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stackFrame,
          start: "center center",
          end: `+=${(cards.length - 1) * 320}`,
          scrub: 0.6,
          pin: stackFrame,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: () => {
            activateMedia(0, true);
          },
          onEnterBack: self => {
            activateMedia(mediaIndexForProgress(self.progress));
          },
          onLeave: stopAllMedia,
          onLeaveBack: () => activateMedia(0, true),
          onUpdate: self => {
            activeCardIndex = mediaIndexForProgress(self.progress);
            activateMedia(activeCardIndex);
          },
        },
      });

      timeline.addLabel("card-1", 0);

      cards.slice(0, -1).forEach((card, index) => {
        timeline.addLabel(`card-${index + 2}`, index + 1);
        timeline.to(
          card,
          { xPercent: -115, opacity: 0, scale: 0.92, duration: 1 },
          index
        );

        cards.slice(index + 1).forEach((nextCard, nextIndex) => {
          timeline.to(
            nextCard,
            {
              x: nextIndex * 50,
              scale: 1,
              opacity: 1 - nextIndex * 0.13,
              duration: 1,
            },
            index
          );
        });
      });
    }, stackFrame);

    return () => {
      context.revert();
    };
  }, [activeTab]);

  return (
    <section
      className="designer-builder"
      aria-labelledby="designer-builder-title"
    >
      <div
        className="designer-builder-stack-frame mx-auto max-w-7xl px-6 md:px-12 lg:px-16"
        ref={stackFrameRef}
      >
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <h2
            id="designer-builder-title"
            className="font-display text-[28px] font-medium leading-tight text-[#222222] md:text-[32px] lg:text-[40px] xl:text-[48px]"
          >
            Most days - Designer. Some days - Builder.
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <div
            className="designer-builder-tabs"
            role="tablist"
            aria-label="Projects"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "ai"}
              className={activeTab === "ai" ? "is-active" : ""}
              onClick={() => {
                setActiveTab("ai");
              }}
            >
              <span>AI experiments</span>
              <span className="designer-builder-tab-icon" aria-hidden="true">
                ✦
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "writing"}
              className={activeTab === "writing" ? "is-active" : ""}
              onClick={() => {
                setActiveTab("writing");
              }}
            >
              <span>Substack writing</span>
              <span
                className="designer-builder-tab-icon designer-builder-tab-icon--flipped"
                aria-hidden="true"
              >
                ✎
              </span>
            </button>
          </div>
          <div className="designer-builder-stack" role="tabpanel">
            {activeProjects.map((project, index) => {
              const content = (
                <>
                  <div
                    className={`designer-builder-preview ${project.previewClass}`}
                  >
                    {project.videoSrc ? (
                      <video
                        className={project.mediaClass}
                        loop={project.loopVideo}
                        muted
                        playsInline
                        poster={project.posterSrc}
                        preload={index === 0 ? "auto" : "metadata"}
                        ref={element => {
                          videoRefs.current[index] = element;
                        }}
                        src={project.videoSrc}
                      />
                    ) : project.gifSrc ? (
                      // GIF paths can be added to the project data when ready.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={project.gifSrc} alt="" />
                    ) : project.imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className={project.imageClass}
                        src={project.imageSrc}
                        alt=""
                      />
                    ) : project.previewKind === "substack-mood" ||
                      project.previewKind === "substack-vibe" ? (
                      <div
                        className="designer-builder-substack-preview"
                        aria-hidden="true"
                      >
                        <div className="designer-builder-substack-nav">
                          <span className="designer-builder-substack-mark" />
                          <strong>Jashvi</strong>
                          <span>⌕　◯　♧</span>
                        </div>
                        <div className="designer-builder-substack-article">
                          <h4>
                            {project.previewKind === "substack-mood"
                              ? "Mood to Moodboard"
                              : "I vibe coded my first real product in 4 days. Here’s what that actually looked like."}
                          </h4>
                          <p>
                            {project.previewKind === "substack-mood"
                              ? "A Designer’s Secret Weapon"
                              : "A Product designer who also is learning German"}
                          </p>
                          <small>
                            JASHVI　·　
                            {project.previewKind === "substack-mood"
                              ? "JUN 03, 2026"
                              : "MAY 25, 2026"}
                          </small>
                          <i />
                          <b>
                            {project.previewKind === "substack-mood"
                              ? "As designers, our main job is to translate feelings into visuals."
                              : "When AI started showing up everywhere in design, a lot of designers got nervous."}
                          </b>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="designer-builder-card-content">
                    <h3 className="designer-builder-card-title">
                      {project.title}
                    </h3>
                    <div
                      className="designer-builder-tags"
                      aria-label="Project categories"
                    >
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="designer-builder-cta">
                      <span className="designer-builder-cta-label">
                        {project.href
                          ? (project.ctaLabel ?? "View project")
                          : (project.statusLabel ?? "Coming soon")}
                      </span>
                      {project.href ? (
                        <span
                          className="designer-builder-cta-arrow"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      ) : null}
                    </span>
                  </div>
                </>
              );

              return project.href ? (
                <a
                  className="designer-builder-card cursor-hover"
                  href={project.href}
                  key={project.id}
                  target="_blank"
                  rel="noreferrer"
                  ref={element => {
                    cardRefs.current[index] = element;
                  }}
                >
                  {content}
                </a>
              ) : (
                <article
                  className="designer-builder-card"
                  key={project.id}
                  ref={element => {
                    cardRefs.current[index] = element;
                  }}
                >
                  {content}
                </article>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
