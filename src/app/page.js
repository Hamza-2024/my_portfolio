'use client';

import { portfolioData, PROFILE_PIC_URL } from '../data/portfolioData';
import SocialLink from '../components/SocialLink';
import SkillTag from '../components/SkillTag';
import ProjectCard from '../components/ProjectCard';
import EducationEntry from '../components/EducationEntry';
import ProfileImage from '../components/ProfileImage';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 p-4 sm:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER/HERO SECTION --- */}
        <header className="py-16 text-center border-b border-slate-800 mb-12">
          {/* Profile Picture */}
          <div className="mb-10 flex justify-center">
            <ProfileImage 
              alt="Hamza Anter Profile"
            />
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-2">
            {portfolioData.name}
          </h1>
          <p className="text-xl sm:text-2xl font-light text-indigo-400 mb-6">
            {portfolioData.title}
          </p>
          <p className="max-w-3xl text-md sm:text-lg text-slate-300 mx-auto">
            {portfolioData.intro}
          </p>
        </header>

        {/* --- SOCIALS & CONTACT SECTION --- */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-2">Connect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioData.socials.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-indigo-500 pb-2">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-indigo-500 pb-2">Education</h2>
          <div className="space-y-8">
            {portfolioData.education.map((entry, index) => (
              <EducationEntry key={index} entry={entry} />
            ))}
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-indigo-500 pb-2">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.languages.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.frameworks.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Developer Tools & Other</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.tools.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="text-center py-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {portfolioData.name}. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}
