
import React from 'react';
import { Sun, Radio, Cpu, Layers, ArrowUpRight, Zap, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: "01",
    icon: <Sun size={32} strokeWidth={1} />,
    title: "SOLAR_LOGIC",
    description: "High-intensity neural processing optimized for tropical latency. Utilizing sun-state clarity for decision frameworks.",
    className: "md:col-span-2 md:row-span-2",
    accent: "#ccff00",
    bgImage: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&q=80&w=1000",
    stats: ["LATENCY: 4ms", "FREQ: 5.2GHz"]
  },
  {
    id: "02",
    icon: <Radio size={24} strokeWidth={1} />,
    title: "VIBE_SYNC",
    description: "Real-time aesthetic harmonization across all active Caribbean nodes.",
    className: "md:col-span-1 md:row-span-1",
    accent: "#FFD700",
    stats: ["SYNC: ACTIVE"]
  },
  {
    id: "03",
    icon: <Cpu size={24} strokeWidth={1} />,
    title: "NEURAL_ROOTS",
    description: "Intelligence built on deep-layered Caribbean logic structures.",
    className: "md:col-span-1 md:row-span-2",
    accent: "#ffffff",
    stats: ["DEPTH: 128-LYR"]
  },
  {
    id: "04",
    icon: <Layers size={24} strokeWidth={1} />,
    title: "MODAL_SYNC",
    description: "Multi-sensory input blending.",
    className: "md:col-span-1 md:row-span-1",
    accent: "#ccff00",
    stats: ["CHANNELS: 16"]
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-60 px-6 max-w-[1440px] mx-auto relative">
      {/* Background Title Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-between px-10 mono text-[10px] text-white/5 uppercase tracking-[1em] pointer-events-none">
        <span>[ CARIBBEAN_NODE_SECURE ]</span>
        <span>[ ARCHITECTURE_V4.02 ]</span>
      </div>

      <div className="mb-40 flex flex-col md:flex-row items-baseline justify-between gap-10">
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-4"
          >
            CORE<span className="text-[#ccff00]">_</span>OS
          </motion.h2>
          <div className="flex items-center gap-4">
            <Zap size={14} className="text-[#ccff00]" />
            <span className="mono text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase">Neural Intelligence Clusters</span>
          </div>
        </div>
        <div className="max-w-md text-right hidden md:block">
          <p className="text-white/40 text-lg font-medium leading-relaxed italic">
            "We aren't just building tools; we're growing digital ecosystems that reflect our unique cultural rhythm."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`${f.className} group relative overflow-hidden rounded-[3rem] border border-white/5 hover:border-[#ccff00]/30 transition-all duration-700 bg-[#080808]`}
          >
            {/* Background Layer */}
            {f.bgImage ? (
              <div className="absolute inset-0 z-0">
                <img src={f.bgImage} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              </div>
            ) : (
              <div className="absolute inset-0 z-0 opacity-10">
                 <div className="w-full h-full bg-grid" />
              </div>
            )}

            {/* Content Layer */}
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:bg-white group-hover:text-black"
                  style={{ borderColor: `${f.accent}20`, color: f.accent }}
                >
                  {f.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="mono text-[9px] font-bold text-white/20 uppercase tracking-widest">Node_{f.id}</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#ccff00] animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-[#ccff00] transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base leading-snug font-medium max-w-[280px] group-hover:text-white/60 transition-colors">
                  {f.description}
                </p>
                
                {/* Tech Specs Revealed on Hover */}
                <div className="pt-4 flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {f.stats.map(s => (
                    <span key={s} className="mono text-[8px] font-bold py-1 px-3 bg-white/5 rounded-full border border-white/10 uppercase tracking-widest">
                      {s}
                    </span>
                  ))}
                  <div className="ml-auto">
                    <ArrowUpRight size={18} className="text-[#ccff00]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corners Decor */}
            <div className="absolute top-4 left-4 opacity-20"><Crosshair size={12} /></div>
            <div className="absolute bottom-4 right-4 mono text-[8px] opacity-10">ID: JAIA_RT_{f.id}</div>
          </motion.div>
        ))}
      </div>

      {/* Grid Footer Decor */}
      <div className="mt-20 flex justify-center">
        <div className="flex items-center gap-10 opacity-20">
          <div className="h-[1px] w-40 bg-white" />
          <div className="mono text-[10px] uppercase tracking-[1em] whitespace-nowrap">End_Cluster_Definition</div>
          <div className="h-[1px] w-40 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
