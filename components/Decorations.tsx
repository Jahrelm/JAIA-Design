
import React from 'react';
import { motion } from 'framer-motion';

export const NeuralRootSVG = () => (
  <svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 pointer-events-none">
    <path d="M300 800C300 800 300 600 200 500C100 400 50 450 20 400" stroke="#ccff00" strokeWidth="1" strokeDasharray="5 5" />
    <path d="M300 800C300 800 350 550 450 500C550 450 580 350 600 300" stroke="#ccff00" strokeWidth="1" />
    <circle cx="300" cy="800" r="150" stroke="#ccff00" strokeOpacity="0.1" />
    <circle cx="20" cy="400" r="5" fill="#ccff00" className="animate-pulse" />
    <circle cx="600" cy="300" r="5" fill="#FFD700" />
  </svg>
);

const Decorations: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* HUD Coordinate Readouts */}
      <div className="absolute top-10 left-10 mono text-[10px] text-white/10 uppercase tracking-[0.5em] hidden lg:block">
        [ SYSTEM_RESOURCES: 98% ]<br />
        [ UPTIME: 1024:12:05 ]
      </div>

      <div className="absolute top-10 right-10 mono text-[10px] text-white/10 uppercase tracking-[0.5em] text-right hidden lg:block">
        [ ENCRYPTION: AES-256 ]<br />
        [ NODE: JAMAICA_01 ]
      </div>

      {/* Dynamic Digital Sun Gradient */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(circle,rgba(204,255,0,0.15)_0%,transparent_70%)] rounded-full blur-[120px]" 
      />

      {/* Floating Neural Roots */}
      <div className="absolute top-0 right-[-10%] rotate-12">
        <NeuralRootSVG />
      </div>
      <div className="absolute bottom-[-10%] left-[-5%] -rotate-45 scale-150">
        <NeuralRootSVG />
      </div>

      {/* Background Frame Corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10" />
    </div>
  );
};

export default Decorations;
