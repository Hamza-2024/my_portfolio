import { Linkedin } from 'lucide-react';

const SocialLink = ({ icon: Icon, url, handle }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition duration-200 shadow-lg group"
  >
    <Icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition" />
    <span className="text-sm text-slate-300 group-hover:text-white truncate hidden md:inline-block">
      {handle}
    </span>
  </a>
);

export default SocialLink;