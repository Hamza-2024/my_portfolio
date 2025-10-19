'use client';

const ProfileImage = ({ alt }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl transform scale-110"></div>
      <img 
        src="/pofile_pic.jpg"
        alt={alt}
        className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full border-4 border-indigo-500 shadow-2xl relative hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default ProfileImage;