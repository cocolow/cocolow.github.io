import eclectusImg from "@/assets/eclectus.jpg";

export type Project = {
  title: string;
  category: "Work" | "Art" | "Personal";
  gradient: string;
  file: string;
  description: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Brand Identity System",
    category: "Work",
    gradient: "from-watercolor-orange/40 to-watercolor-yellow/30",
    file: "brand_v3.psd",
    description: "Complete brand identity for a creative agency",
    featured: true,
  },
  {
    title: "Mobile App Redesign",
    category: "Work",
    gradient: "from-watercolor-blue/40 to-watercolor-turquoise/30",
    file: "app_mockup.fig",
    description: "UX/UI redesign for a fintech mobile app",
    image: eclectusImg,
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    category: "Work",
    gradient: "from-watercolor-green/40 to-watercolor-blue/30",
    file: "ecomm_v2.fig",
    description: "Full-stack e-commerce platform build",
  },
  {
    title: "Dashboard Analytics",
    category: "Work",
    gradient: "from-watercolor-turquoise/40 to-watercolor-purple/30",
    file: "dashboard.fig",
    description: "Data visualization dashboard for SaaS product",
  },
  {
    title: "Open Source CLI Tool",
    category: "Personal",
    gradient: "from-watercolor-turquoise/40 to-watercolor-blue/30",
    file: "cli_tool.rs",
    description: "A command-line tool built in Rust",
    featured: true,
  },
  {
    title: "Generative Art Series",
    category: "Art",
    gradient: "from-watercolor-purple/40 to-watercolor-pink/30",
    file: "gen_art_07.png",
    description: "Algorithmic art exploring color and form",
    featured: true,
  },
  {
    title: "Botanical Illustrations",
    category: "Art",
    gradient: "from-watercolor-green/40 to-watercolor-yellow/30",
    file: "botanicals.tif",
    description: "Detailed watercolor botanical studies",
    featured: true,
  },
  {
    title: "Watercolor Portraits",
    category: "Art",
    gradient: "from-watercolor-burgundy/40 to-watercolor-orange/30",
    file: "portrait_02.png",
    description: "Expressive portrait series in watercolor",
    featured: true,
  },
  {
    title: "Abstract Landscapes",
    category: "Art",
    gradient: "from-watercolor-blue/40 to-watercolor-green/30",
    file: "landscape_04.png",
    description: "Mixed-media abstract landscape collection",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
