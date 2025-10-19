import Code from 'lucide-react/dist/esm/icons/code';

const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-2xl hover:shadow-indigo-500/20 transition duration-300 transform hover:scale-[1.01]">
    <div className="flex items-center mb-3">
      <Code className="w-6 h-6 text-emerald-400 mr-3" />
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
    </div>
    <p className="text-sm font-semibold text-indigo-400 mb-3">{project.stack}</p>
    <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
  </div>
);

export default ProjectCard;