import { motion } from "framer-motion";
import { Server, Shield, Zap, Thermometer, Flame, Speaker, Network } from "lucide-react";

export function Products() {
  const categories = [
    {
      title: "Networks & Telecom",
      icon: <Network className="h-8 w-8" />,
      brands: ["CISCO", "3M", "RUCKUS", "MMC"]
    },
    {
      title: "Laptop & Servers",
      icon: <Server className="h-8 w-8" />,
      brands: ["DELL", "HEWLETT PACKARD", "LENOVO"]
    },
    {
      title: "Surveillance & Security",
      icon: <Shield className="h-8 w-8" />,
      brands: ["HONEYWELL", "DAHUA", "PELCO"]
    },
    {
      title: "FA & PA System",
      icon: <Speaker className="h-8 w-8" />,
      brands: ["HONEYWELL", "TOA", "BOSCH", "OPTIMUS"]
    },
    {
      title: "UPS & Generators",
      icon: <Zap className="h-8 w-8" />,
      brands: ["PERKINS", "APC", "BAYKEE"]
    },
    {
      title: "HVAC",
      icon: <Thermometer className="h-8 w-8" />,
      brands: ["MIDEA", "MEKAR"]
    },
    {
      title: "Fire Fighting",
      icon: <Flame className="h-8 w-8" />,
      brands: ["LIFEECO", "MEKAR"]
    }
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 pt-40 pb-24 relative overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-accent-dark/30 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-cyan-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold text-cyan-accent-light uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(0,139,139,0.2)]"
          >
            World-Class Partners
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent-light via-cyan-accent to-blue-500">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Distributing the finest solutions from world-renowned brands to build robust and scalable infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-cyan-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-3xl bg-slate-900/40 backdrop-blur-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-700/50 hover:border-cyan-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,139,139,0.15)] overflow-hidden flex flex-col h-full"
              >
                {/* Card Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-accent/20 rounded-full blur-[50px] -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 text-cyan-accent shadow-lg shadow-cyan-accent/5 border border-slate-700/50 group-hover:bg-cyan-accent group-hover:text-white group-hover:border-cyan-accent transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,139,139,0.4)] group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-cyan-accent-light transition-colors duration-300">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                    {category.brands.map((brand, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-950/50 text-slate-300 border border-slate-800 group-hover:border-cyan-accent/30 group-hover:text-white group-hover:bg-cyan-accent/10 transition-colors duration-300"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
