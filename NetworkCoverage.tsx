import { Globe } from "./ui/globe";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function NetworkCoverage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-slate-950">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#008B8B",
            },
            links: {
              color: "#00A8A8",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      )}
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-accent-dark/20 via-slate-950/80 to-slate-950 z-0 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-3 py-1 text-xs font-medium text-cyan-accent-light uppercase tracking-wider">
                National Infrastructure
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Pakistan Network <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent-light to-blue-400">Coverage</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Our extensive fiber optic and wireless network connects major cities across Pakistan, ensuring high-speed, reliable communication for your enterprise.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full flex items-center justify-center overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-cyan-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <Globe className="top-0" />
            
            {/* Overlay gradient to blend globe into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
