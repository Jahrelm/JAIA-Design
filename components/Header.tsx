
import React from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: 'Platform', href: '#about', bgText: 'Roots' },
    { label: 'Committees', href: '#committees', bgText: 'Nodes' },
    { label: 'Directory', href: '#directory', bgText: 'Network' },
    { label: 'Events', href: '#meetup', bgText: 'Gather' },
    { label: 'Session', href: '#playground', bgText: 'Vibe' },
    { label: 'Contact', href: '#contact', bgText: 'Reach' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="w-10 h-10 bg-[#ccff00] rounded-lg flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Zap size={20} className="text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-white hidden sm:block">JAIA</span>
        </div>

        <div className="hidden lg:flex items-center gap-1 border-x border-white/5 px-4 h-12">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="px-5 h-full flex items-center text-[10px] mono font-bold uppercase tracking-[0.2em] text-white/40 hover:text-[#ccff00] hover:bg-white/[0.02] transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#ccff00] transition-all">
            Join_Hub <ArrowUpRight size={14} />
          </button>
          <button 
            className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:border-[#ccff00]/40 transition-all" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[90] pointer-events-auto flex flex-col justify-center p-12 md:p-24 overflow-hidden"
          >
            {/* Visual sidebar accent */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#ccff00]/60" />
            
            <div className="flex flex-col gap-8 md:gap-12 relative z-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.href} className="relative z-10 block">
                    <span className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white group-hover:text-[#ccff00] transition-colors">
                      {item.label}
                    </span>
                  </a>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-8xl md:text-[14rem] font-black uppercase tracking-tighter text-white/[0.03] pointer-events-none select-none -z-10 group-hover:text-[#ccff00]/[0.05] transition-colors">
                    {item.bgText}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 border-t border-white/5 pt-10 flex flex-wrap gap-8 text-[10px] mono text-white/20 uppercase tracking-[0.4em]">
               <div>[ STATUS: OPERATIONAL ]</div>
               <div className="hidden md:block">///</div>
               <div>[ LOCATION: KGN_NODE ]</div>
               <div className="md:ml-auto">© 2024 JAIA.INTEL</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
