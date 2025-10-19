'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        {/* Spinning Ring Animation */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text with Pulse Animation */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl font-light text-indigo-400 animate-pulse">Loading</span>
          <span className="text-2xl text-indigo-400">.</span>
          <span className="text-2xl text-indigo-400 animate-pulse delay-100">.</span>
          <span className="text-2xl text-indigo-400 animate-pulse delay-200">.</span>
        </div>
      </div>
    </div>
  );
}