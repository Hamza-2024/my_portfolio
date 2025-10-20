import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';

// Profile picture path (stored in public directory)
export const PROFILE_PIC_URL = '/profile_pic.jpg';

export const portfolioData = {
  name: "Hamza Anter",
  title: "Computer Engineering Student | Full-Stack Enthusiast",
  intro: "I am a Computer Engineering student at Trinity College Dublin, passionate about building robust and scalable applications. Skilled in full-stack development, I leverage modern technologies like Next.js, Supabase, and Auth0 to design and deploy end-to-end solutions. I enjoy turning ideas into production-ready, user-centric applications.",
  socials: [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/hamza-anter-8b418a292/", handle: "linkedin.com/in/hamza-anter" },
    { name: "GitHub", icon: Github, url: "https://github.com/Hamza-2024?tab=overview&from=2025-07-01&to=2025-07-31", handle: "github.com/hamza" },
    { name: "Email", icon: Mail, url: "mailto:engineering@hamzaanter.com", handle: "engineering@hamzaanter.com" },
    
  ],
  projects: [
    {
      title: "Restaurant Reservation & Ordering Platform",
      stack: "Next.js, Supabase, Auth0, Stripe",
      description: "Full-stack SaaS platform designed to streamline restaurant operations. Features include secure table reservations, QR-code based ordering, and integrated digital payments with bill splitting logic.",
    },
    {
      title: "Community Web Application",
      stack: "React, Node.js, Express, MongoDB",
      description: "A full-stack web application enabling community members to view real-time prayer times, register for events, and contribute donations. Includes automated email/SMS notification services.",
    },
    {
      title: "UDP Client-Server and Satellite Systems",
      stack: "C++, Sockets, Multithreading",
      description: "Simulated a multi-threaded satellite communication system. The system handles reliable telemetry and image transfer, focusing on network programming, concurrency, and robust error handling.",
    },
  ],
  education: [
    {
      institution: "Trinity College Dublin",
      degree: "Bachelor of Engineering in Computer Engineering",
      years: "Aug. 2022 - 2026",
      icon: GraduationCap,
    },
    {
      institution: "De La Salle College",
      degree: "Secondary Education",
      years: "Aug. 2017 - May 2022",
      icon: BookOpen,
    },
  ],
  skills: {
    languages: ["Python", "JavaScript", "C++", "Java", "SQL (Postgres)", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    tools: ["Git", "Docker", "GitHub Actions", "VS Code", "Supabase", "Auth0", "Stripe", "REST APIs", "Cloudflare"],
  },
};