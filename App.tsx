
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import EventSection from './components/EventSection';
import Playground from './components/Playground';
import Footer from './components/Footer';
import Decorations from './components/Decorations';
import { motion } from 'framer-motion';
import { Globe, Users2, Mail, MapPin, Zap, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#ccff00] selection:text-black bg-[#050505]">
      <Decorations />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        {/* ABOUT SECTION (PLATFORM) */}
        <section id="about" className="py-60 px-6 max-w-7xl mx-auto relative overflow-hidden">
          <div className="absolute -left-20 top-20 text-[18rem] font-black text-white/[0.01] uppercase tracking-tighter pointer-events-none select-none">
            Roots
          </div>
          <div className="grid md:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-12">
              <div className="mono text-[10px] tracking-[0.6em] text-[#ccff00] uppercase font-bold flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#ccff00]/20" />
                Foundational_Logic
              </div>
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                BORN IN <br /><span className="text-[#ccff00]">THE SUN</span>
              </h2>
              <p className="text-2xl text-white/40 leading-relaxed font-medium max-w-lg">
                JAIA is a Jamaican-led cognitive architecture. We've synthesized island energy with world-class neural engineering to define the "Irie Intelligence" standard.
              </p>
              <div className="flex gap-12 pt-8">
                <div>
                  <p className="text-5xl font-black text-[#FFD700]">Irie</p>
                  <p className="mono text-[10px] uppercase tracking-widest text-white/30 font-bold mt-2">Design State</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-white">4.0</p>
                  <p className="mono text-[10px] uppercase tracking-widest text-white/30 font-bold mt-2">Neural Tier</p>
                </div>
              </div>
            </div>
            <div className="relative group p-4 glass-panel rounded-[4rem]">
              <img 
                src="https://picsum.photos/seed/island-tech/1000/1000?grayscale" 
                alt="Island Technology" 
                className="relative rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-[2rem] border-[#ccff00]/30 max-w-[200px] hidden md:block">
                <p className="mono text-[9px] font-bold text-[#ccff00] tracking-widest uppercase mb-2">Node_Active</p>
                <p className="text-xs text-white/50 leading-tight">System synced to Kingston Standard Frequency.</p>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid />

        {/* COMMITTEES SECTION */}
        <section id="committees" className="py-60 px-6 max-w-7xl mx-auto relative">
          <div className="absolute -right-20 top-0 text-[18rem] font-black text-white/[0.01] uppercase tracking-tighter pointer-events-none select-none">
            Nodes
          </div>
          <div className="mb-24 flex flex-col md:flex-row items-baseline gap-8">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">COMMITTEES</h2>
            <div className="h-px flex-grow bg-white/5" />
            <p className="text-xl text-white/40 max-w-md font-medium mono text-right">[ SPECIALIZED_CLUSTERS ]</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Neural Logic", desc: "Developing core decision frameworks with optimized island latency.", color: "text-[#ccff00]", code: "0xNL" },
              { title: "Creative Ethics", desc: "Ensuring cultural representation and bias mitigation in neural outputs.", color: "text-[#FFD700]", code: "0xCE" },
              { title: "Sync_Lab", desc: "Optimizing hardware-to-brain interfaces for real-time creation.", color: "text-white", code: "0xSL" }
            ].map((c, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="glass-panel p-12 rounded-[3rem] border border-white/5 hover-glow transition-all group"
              >
                <div className="flex justify-between items-start mb-12">
                   <Users2 className={`group-hover:scale-110 transition-transform ${c.color}`} size={40} />
                   <span className="mono text-[10px] text-white/20 font-bold">{c.code}</span>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{c.title}</h3>
                <p className="text-white/40 leading-relaxed font-medium">{c.desc}</p>
                <div className="mt-8 flex gap-2">
                   <div className="w-8 h-1 bg-white/5 rounded-full" />
                   <div className="w-2 h-1 bg-[#ccff00]/40 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DIRECTORY SECTION */}
        <section id="directory" className="py-60 px-6 relative bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-24">
              <div className="md:col-span-4">
                <div className="sticky top-40">
                  <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">DIRECTORY</h2>
                  <p className="text-xl text-white/30 font-medium mb-12">Our active research hubs across the Caribbean architecture.</p>
                  <div className="mono text-[10px] text-[#ccff00] flex flex-col gap-2">
                    <div>> NETWORK_STATUS: ONLINE</div>
                    <div>> ACTIVE_NODES: 04</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 space-y-6">
                {[
                  { name: "Silicon Kingston", location: "Jamaica, WI", tags: ["HQ", "Research"], coords: "18.0179° N" },
                  { name: "Port of Spain Lab", location: "Trinidad & Tobago", tags: ["Visual"], coords: "10.6667° N" },
                  { name: "Barbados Node", location: "Bridgetown", tags: ["Ethics"], coords: "13.1132° N" },
                  { name: "Lucian Logic", location: "St. Lucia", tags: ["Audio"], coords: "13.9094° N" }
                ].map((d, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 20 }}
                    className="p-10 glass-panel rounded-[2.5rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer border-white/5 hover:border-[#ccff00]/30 transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Globe size={16} className="text-[#ccff00]" />
                        <span className="mono text-[10px] font-bold uppercase tracking-widest text-white/30">{d.location} // {d.coords}</span>
                      </div>
                      <h4 className="text-4xl font-black uppercase tracking-tighter">{d.name}</h4>
                    </div>
                    <div className="flex gap-3">
                      {d.tags.map(tag => (
                        <span key={tag} className="px-5 py-2 glass-panel rounded-full text-[10px] mono font-bold uppercase tracking-widest text-[#FFD700] border-[#FFD700]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <EventSection />

        <Playground />

        {/* CONTACT SECTION */}
        <section id="contact" className="py-60 px-6 max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[18rem] font-black text-white/[0.01] uppercase tracking-tighter pointer-events-none select-none">
            Reach
          </div>
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-8">CONTACT</h2>
            <p className="text-2xl text-white/40 font-medium max-w-2xl mx-auto">Sync your frequency with JAIA. Let's build the future together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="glass-panel p-12 rounded-[4rem] space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 bg-[#ccff00] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#ccff00]/20">
                  <Mail className="text-black" />
                </div>
                <div>
                  <h4 className="mono text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Electronic_Mail</h4>
                  <p className="text-3xl font-black text-white hover:text-[#ccff00] transition-colors cursor-pointer">connect@jaia.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-black" />
                </div>
                <div>
                  <h4 className="mono text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Physical_Hub</h4>
                  <p className="text-3xl font-black text-white/80 leading-tight">40 Hope Road, <br />Kingston 10, JA</p>
                </div>
              </div>
            </div>

            <form className="glass-panel p-12 rounded-[4rem] flex flex-col gap-6">
              <div className="space-y-6">
                <input type="text" placeholder="IDENTITY_NAME" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-[#ccff00] text-white mono text-xs font-bold tracking-widest uppercase placeholder:text-white/10" />
                <input type="email" placeholder="EMAIL_ADDRESS" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-[#ccff00] text-white mono text-xs font-bold tracking-widest uppercase placeholder:text-white/10" />
                <textarea placeholder="MESSAGE_CONTEXT" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-[#ccff00] text-white mono text-xs font-bold tracking-widest uppercase h-32 resize-none placeholder:text-white/10" />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#ccff00', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-[#ccff00]/30 text-[#ccff00] py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-sm transition-all shadow-xl"
              >
                SEND SIGNAL
              </motion.button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
