const EducationEntry = ({ entry }) => (
  <div className="flex items-start space-x-4">
    <entry.icon className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
    <div>
      <h4 className="text-lg font-semibold text-white">{entry.institution}</h4>
      <p className="text-indigo-300 text-sm">{entry.degree}</p>
      <p className="text-slate-400 text-xs">{entry.years}</p>
    </div>
  </div>
);

export default EducationEntry;