import { motion } from "framer-motion";
import { Users, Target, Building2, Briefcase, Award, Globe2, Zap } from "lucide-react";

export function About() {
  const stats = [
    { label: "Years Experience", value: "15+", icon: <Award className="h-5 w-5" /> },
    { label: "Global Partners", value: "50+", icon: <Globe2 className="h-5 w-5" /> },
    { label: "Projects Delivered", value: "500+", icon: <Zap className="h-5 w-5" /> },
    { label: "Team Members", value: "100+", icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* Header */}
      <section className="bg-slate-950 pt-40 pb-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-accent-dark/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-3 py-1 text-xs font-medium text-cyan-accent-light uppercase tracking-wider mb-6"
          >
            Established in 2008
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Pioneering the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent-light to-blue-400">Digital Frontier</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We are a premier solution provider and system integrator, delivering state-of-the-art technology and networking solutions across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-slate-800 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-accent/30 transition-colors"
              >
                <div className="text-cyan-accent mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          
          {/* Bento Grid Layout for Who We Are & Our Aim */}
          <div className="grid md:grid-cols-12 gap-8 mb-24">
            
            {/* Who We Are - Takes up more space */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-800 hover:border-slate-700 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-accent shadow-lg shadow-cyan-accent/10 border border-slate-700">
                    <Users className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Who Are We</h2>
                </div>
                <div className="prose prose-lg prose-invert text-slate-400 font-light leading-relaxed">
                  <p>
                    “Premier Solutions” is a renowned Nation Wide and is proud to present its integrated technology services and solutions as well as its networking solutions in Pakistan. Over the time the company has grown enormously providing state-of-the-art solutions bringing the latest innovative technologies to its client.
                  </p>
                  <p>
                    We focus on high-impact growth opportunities in Telecommunication, secure network, computer industry and power. We profitably achieve market share leadership using teamwork, creativity, resourcefulness, and integrity to satisfy the IT/Telco infrastructure needs of strategic global customers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Aim - Taller, narrower */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-10 border border-slate-800 hover:border-cyan-accent/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-accent/5 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-cyan-accent/10 flex items-center justify-center text-cyan-accent shadow-lg shadow-cyan-accent/20 border border-cyan-accent/20">
                    <Target className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Our Aim</h2>
                </div>
                <div className="prose prose-lg prose-invert text-slate-400 font-light leading-relaxed">
                  <p>
                    To become market leaders in integrated technology solution providers and the benchmark company in the IT/Telco business.
                  </p>
                  <p>
                    We work in partnership with telecom service providers and large enterprises to roll out innovative services and achieve quick ROI on IT investments.
                  </p>
                  <p>
                    We are developing an extremely focused, motivated, and professionally trained workforce to translate our clients' vision into reality.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Infrastructure & Clients - Side by Side Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-800 hover:shadow-[0_0_30px_-5px_rgba(0,139,139,0.15)] transition-all"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center text-white shadow-lg border border-slate-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Infrastructure</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                “Premier Solutions” is actively involved in telecom outside infrastructure development and marketing of telecommunication products. We stock Fiber Optic and Copper Cable products and accessories for Telecom Applications. We work as an exclusive representative for a number of Manufacturers around the world, successfully promoting their products.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-800 hover:shadow-[0_0_30px_-5px_rgba(0,139,139,0.15)] transition-all"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center text-white shadow-lg border border-slate-700">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Our Clients</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 font-light">
                We are proud to serve an impressive and diverse list of clients, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 font-medium">
                {[
                  "Basic Telephony Operators",
                  "Cellular Operators",
                  "Internet Services Providers",
                  "Educational Institutions",
                  "Pakistan Railways",
                  "Textile and Spinning Mills",
                  "Oil and Gas",
                  "Power Utilities"
                ].map((client, i) => (
                  <li key={i} className="flex items-center group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center mr-3 border border-slate-700 group-hover:border-cyan-accent/50 transition-colors">
                      <span className="w-2 h-2 bg-cyan-accent rounded-full shadow-[0_0_8px_rgba(0,139,139,0.8)]"></span>
                    </span>
                    <span className="group-hover:text-white transition-colors font-light">{client}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
