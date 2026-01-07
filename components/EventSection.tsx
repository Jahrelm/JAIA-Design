
import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const speakers = [
  { name: "Alara Vore", role: "Design Lead @ Meta", img: "https://picsum.photos/seed/s1/400/400" },
  { name: "Marcus J.", role: "Founder JAIA", img: "https://picsum.photos/seed/s2/400/400" },
  { name: "Suki Chen", role: "AI Ethicist", img: "https://picsum.photos/seed/s3/400/400" },
];

const EventSection: React.FC = () => {
  return (
    <section id="meetup" className="py-40 px-6 relative overflow-hidden bg-black">
      <div className="absolute -left-20 top-0 text-[18rem] font-black text-white/[0.01] uppercase tracking-tighter pointer-events-none select-none">
        Gather
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-24 relative z-10">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <h2 className="text-7xl md:text-9xl font-black mb-12 leading-[0.85] uppercase tracking-tighter">JAIA <br /><span className="text-[#FFD700]">SUMMIT</span> <br /> 2024</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border border-[#ccff00]/20">
                  <Calendar className="text-[#ccff00]" size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-[0.3em] font-black">When</p>
                  <p className="text-2xl font-black">DEC 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border border-white/10">
                  <MapPin className="text-white/60" size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-[0.3em] font-black">Where</p>
                  <p className="text-2xl font-black uppercase">Kingston / Metaverse</p>
                </div>
              </div>
            </div>
            <button className="mt-16 w-full py-6 bg-white text-black font-black rounded-2xl text-xl hover:bg-[#ccff00] transition-colors shadow-xl flex items-center justify-center gap-4">
              SECURE YOUR PASS <ArrowRight />
            </button>
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-sm font-black mb-12 uppercase tracking-[0.4em] text-[#ccff00]">Featured Voices</h3>
          <div className="grid gap-4">
            {speakers.map((s, i) => (
              <div key={i} className="glass group p-8 rounded-[3rem] flex items-center gap-8 hover:bg-white/5 transition-all border border-white/5 hover:border-[#ccff00]/20">
                <div className="w-32 h-32 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter mb-2">{s.name}</h4>
                  <p className="text-xl text-white/40 font-medium">{s.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 glass rounded-[4rem] border border-white/10">
            <h4 className="text-2xl font-black mb-10 uppercase tracking-tighter">THE RHYTHM</h4>
            <div className="space-y-8">
              {[
                { time: "10:00", event: "The Cognitive Shift Keynote", color: "text-[#ccff00]" },
                { time: "11:30", event: "Generative UI in the Tropics", color: "text-[#FFD700]" },
                { time: "13:00", event: "Neural Networking Lunch", color: "text-white" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group cursor-default">
                  <span className={`font-black text-2xl tracking-tighter ${item.color}`}>{item.time}</span>
                  <div className="h-px bg-white/5 flex-grow mx-8 group-hover:bg-white/20 transition-colors" />
                  <span className="text-xl font-bold text-white/80">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
