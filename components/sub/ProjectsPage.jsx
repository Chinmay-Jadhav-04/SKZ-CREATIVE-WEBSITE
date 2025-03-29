// app/projects/page.jsx
import InfiniteProjectCarousel from '@/components/sub/InfiniteProjectCarousel';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      category: "Video Editing",
      title: "YouTube Video Editing",
      description: "Professional YouTube video editing with engaging transitions, text overlays, and color grading. Specializing in long-form content and storytelling.",
      imageUrl: "/video-editing.jpg",
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
      liveUrl: "https://example.com/youtube-portfolio",
    },
    {
      id: 2,
      category: "Video Editing",
      title: "Social Media Reels & Shorts",
      description: "Trending short-form content for Instagram, TikTok, and YouTube Shorts. Fast-paced editing with modern transitions and effects.",
      imageUrl: "/reels-editing1.webp",
      technologies: ["Final Cut Pro", "Instagram", "TikTok", "Sound Design"],
      liveUrl: "https://example.com/reels-portfolio",
    },
    {
      id: 3,
      category: "Video Editing",
      title: "Corporate Promotional Videos",
      description: "60-second promotional videos for businesses featuring professional voiceovers, motion graphics, and compelling storytelling.",
      imageUrl: "/promo-videos.jpg",
      technologies: ["Adobe Suite", "Motion Graphics", "Sound Design", "Scriptwriting"],
      liveUrl: "https://example.com/promo-portfolio",
    },
    {
      id: 4,
      category: "Video Editing",
      title: "Event Highlights",
      description: "Cinematic event coverage including weddings, concerts, and conferences. Featuring drone shots and professional audio mixing.",
      imageUrl: "/event-videos.jpg",
      technologies: ["Premiere Pro", "Drone Footage", "Audio Mixing", "Color Grading"],
      liveUrl: "https://example.com/events-portfolio",
    },
    {
      id: 5,
      category: "Graphic Design",
      title: "Logo & Brand Identity",
      description: "Complete brand identity packages including logos, color palettes, and business stationery designs.",
      imageUrl: "/brand-identity.jpg",
      technologies: ["Illustrator", "Photoshop", "Brand Design", "Typography"],
      liveUrl: "https://example.com/brand-portfolio",
    },
    {
      id: 6,
      category: "Graphic Design",
      title: "Social Media Design",
      description: "Engaging social media content including carousel posts, stories, and infographics with consistent branding.",
      imageUrl: "/social-design.jpg",
      technologies: ["Photoshop", "Illustrator", "Canva Pro", "Social Media"],
      liveUrl: "https://example.com/social-portfolio",
    },
    {
      id: 7,
      category: "Graphic Design",
      title: "UI/UX Design",
      description: "Modern website and app interface designs with focus on user experience and conversion optimization.",
      imageUrl: "/ui-design.jpg",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Wireframing"],
      liveUrl: "https://example.com/ui-portfolio",
    },
    {
      id: 8,
      category: "Social Media Management",
      title: "Content Strategy & Planning",
      description: "Comprehensive social media strategies with content calendars, hashtag research, and performance analytics.",
      imageUrl: "/content-strategy.jpg",
      technologies: ["Content Planning", "Analytics", "Social Strategy", "Marketing"],
      liveUrl: "https://example.com/strategy-portfolio",
    },
    {
      id: 9,
      category: "Custom Projects",
      title: "Animated Explainer Videos",
      description: "Engaging animated videos explaining products, services, or concepts with professional voiceovers.",
      imageUrl: "/explainer-videos.jpg",
      technologies: ["After Effects", "Animation", "Illustration", "Storytelling"],
      liveUrl: "https://example.com/animation-portfolio",
    },
    {
      id: 10,
      category: "Custom Projects",
      title: "Custom Illustrations",
      description: "Bespoke digital illustrations, mascots, and artwork tailored to client specifications.",
      imageUrl: "/illustrations.jpg",
      technologies: ["Procreate", "Illustrator", "Digital Art", "Character Design"],
      liveUrl: "https://example.com/illustration-portfolio",
    }
  ];

  return (
    <main className="min-h-screen bg-[#030014]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Our Creative Portfolio</h1>
        <div className="mb-12">
          <h2 className="text-2xl text-center text-white/80">
            Bringing Your Vision to Life Through Video, Design, and Social Media
          </h2>
        </div>
        <InfiniteProjectCarousel projects={projects} />
      </div>
    </main>
  );
}
