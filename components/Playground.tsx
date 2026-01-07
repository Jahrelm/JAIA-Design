
import React from 'react';
import { Sparkles, Loader2, Music, Waves, ShieldAlert } from 'lucide-react';
import { generateDesignCritique } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const Playground: React.FC = () => {
  const [prompt, setPrompt] = React.useState('');
  const [result, setResult] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const critique = await generateDesignCritique(prompt);
      setResult(critique);
    } catch (err) {
      setError("Connectivity issue detected. Ensure the 'API_KEY' is active and accessible.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="playground" className="py-40 px-6 max-w-6xl mx-auto relative">
      <div className="absolute -right-20 top-20 text-[15rem] font-black text-white/[0.01] uppercase tracking-tighter pointer-events-none select-none">
        Logic
      </div>
      
      <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24 relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#ccff00] rounded-full animate-pulse" />
            <span className="mono text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff00]">Neural_Link v1.2</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">VIBE<br />CONSULT</h2>
          <p className="text-xl text-white/40 font-medium">Inject your creative query into the JAIA neural stream for instant island-grade intelligence.</p>
        </div>
        
        <div className="hidden md:flex gap-2 h-24 items-end">
          {[...Array(16)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [10, 60, 10] }}
              transition={{ duration: 0.8 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 bg-[#ccff00]/10 rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="glass-panel rounded-[4rem] p-4 md:p-6 border-[#ccff00]/10 shadow-[0_0_100px_rgba(204,255,0,0.02)] relative z-10">
        <div className="bg-[#080808] rounded-[3.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Waves size={300} className="text-[#ccff00]" />
          </div>
          
          <form onSubmit={handleAsk} className="relative z-10">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center px-4">
                <label className="mono text-[10px] font-black uppercase tracking-[0.4em] text-white/30">System_Input_</label>
                <div className="mono text-[10px] text-[#ccff00]/40">KGN_LOC_SECURE_NODE_04</div>
              </div>
              
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Initialize creative context..."
                className="w-full h-48 bg-transparent border-2 border-white/5 rounded-[2.5rem] p-10 text-white placeholder:text-white/10 focus:outline-none focus:border-[#ccff00]/30 transition-all resize-none text-2xl font-black tracking-tight"
              />
              
              <motion.button 
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="bg-[#ccff00] text-black py-8 rounded-[2rem] font-black text-2xl uppercase tracking-tighter flex items-center justify-center gap-4 disabled:opacity-50 transition-all shadow-[0_20px_40px_rgba(204,255,0,0.1)] group"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={28} className="group-hover:rotate-12 transition-transform" /> RUN VIBE_CHECK</>}
              </motion.button>
            </div>
          </form>

          <AnimatePresence>
            {(result || error) && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-16 overflow-hidden"
              >
                <div className="pt-16 border-t border-white/5">
                  <div className="flex items-center gap-6 mb-12">
                    <div className={`w-16 h-16 ${error ? 'bg-red-500' : 'bg-[#ccff00]'} rounded-3xl flex items-center justify-center shadow-lg`}>
                      {error ? <ShieldAlert className="text-white" /> : <Music size={28} className="text-black" />}
                    </div>
                    <div>
                      <span className="block font-black text-white uppercase tracking-[0.2em] text-sm">{error ? 'SYSTEM_ERROR' : 'JAIA CORE_OUTPUT'}</span>
                      <span className={`block text-xs ${error ? 'text-red-400' : 'text-[#ccff00]'} font-bold uppercase tracking-[0.4em] mt-1`}>
                        {error ? 'Protocol Failure' : 'Status: Optimized'}
                      </span>
                    </div>
                  </div>
                  <div className={`prose prose-invert max-w-none leading-relaxed text-2xl font-medium tracking-tight p-12 rounded-[3rem] border italic ${error ? 'bg-red-500/5 border-red-500/20 text-red-200' : 'bg-white/[0.02] border-white/5 text-white/70'}`}>
                    {error || result}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Playground;
