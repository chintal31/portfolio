import Layout from "@/components/layout/Layout";
import DesignPhilosophy from "@/components/layout/DesignPhilosophy";
import DesignJourney from "@/components/layout/DesignJourney";

export default function AboutMe() {
  const designJourneySections = [
    {
      heading: "Design Found Me Like Music Did - Naturally.",
      paragraphs: [
        "I didn't study UX. I hadn't even heard of it when I began.\nBut when I stumbled into it, something just clicked.",
        "The way I connected the dots, the way I noticed friction, the way I wanted things to feel - it all came instinctively. Much like the first time I picked up a guitar or started singing as a kid, I didn't need a classroom to tell me this felt right.\nIt just made sense.",
        "I taught myself the craft - from wireframes and user flows to research plans and stakeholder maps. I asked questions, got my hands dirty, and built my confidence one experience at a time.",
        "Today, nearly five years later, I lead UX at a product level - speaking up for users, aligning with business needs, and designing with both empathy and clarity.",
        "It wasn't a conventional journey. But it was mine.\nAnd it began the same way my love for music did - with curiosity, feeling, and an undeniable pull to create.",
      ],
    },
    {
      heading: "From Self Taught to UX Lead",
      paragraphs: [
        "I taught myself the craft — from wireframes and flows to research, strategy, and product thinking.\nI asked a lot of questions. Got my hands dirty. Made mistakes. Grew stronger.",
        "Over nearly five years, I've gone from being a quiet UX Designer to confidently leading experiences at a product level.\nI've learned to advocate for users in rooms full of competing priorities, translate insights into impact, and navigate the messy middle where business and people meet.",
        "It wasn't a conventional path. But it was mine.\nAnd it began the same way music did — with curiosity, feeling, and an undeniable pull to create.",
      ],
    },
    {
      heading: "Still Growing, Still Curious",
      paragraphs: [
        "I've come a long way.\nBut I know I've only just begun.",
        "I dream of taking my skills global - to live and work across cultures, to challenge what I know, and to prove time and again how valuable good design truly is.",
        "Because great design is not just beautiful - it's brave.\nAnd I'm here for all of it.",
      ],
    },
    {
      heading: "Outside Work? I’m Probably...",
      paragraphs: [
        "🎒 Planning a trip (with too many Pinterest tabs open)\n🎤 Singing or strumming my guitar/ukulele\n🥑 Whipping up something healthy-ish in the kitchen\n💪 Showing up at the gym — for both strength and sanity ",
      ],
    },
  ];

  return (
    <Layout
      seo={{
        title: "About Me",
        description:
          "Learn more about my background, skills, and experience as a UX/UI Designer",
      }}
    >
      <DesignPhilosophy />
      {designJourneySections.map((section, index) => (
        <DesignJourney
          key={index}
          heading={section.heading}
          paragraphs={section.paragraphs}
        />
      ))}
    </Layout>
  );
}
