import { NetworkCoverage } from "../components/NetworkCoverage";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Zap, Network, Code, Server } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const vendors = [
    { name: "Cisco", domain: "cisco.com" },
    { name: "Dell", domain: "dell.com" },
    { name: "Bosch", domain: "bosch.com" },
    { name: "Honeywell", domain: "honeywell.com" },
    { name: "Ruckus", domain: "ruckusnetworks.com" },
    { name: "Lenovo", domain: "lenovo.com" },
    { name: "HP", domain: "hp.com" },
    { name: "APC", domain: "apc.com" },
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-50 font-sans selection:bg-cyan-accent/30 selection:text-cyan-accent-light">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-cyan-accent-dark/20 via-slate-950 to-slate-950"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-2 text-sm font-medium text-cyan-accent-light backdrop-blur-md shadow-[0_0_20px_rgba(0,139,139,0.15)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-accent mr-3 animate-pulse shadow-[0_0_8px_rgba(0,139,139,0.8)]"></span>
              Next-Generation IT Infrastructure
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
              Architecting the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent-light via-cyan-accent to-blue-500">Digital Future</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
              Empowering enterprises across Pakistan with state-of-the-art networking, secure infrastructure, and scalable power solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <Link to="/contactus" className="group inline-flex h-14 items-center justify-center rounded-full bg-cyan-accent px-8 text-base font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,139,139,0.5)] hover:bg-cyan-accent-light hover:shadow-[0_0_60px_-15px_rgba(0,139,139,0.7)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/services" className="inline-flex h-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 text-base font-medium text-white hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto backdrop-blur-md">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      </section>

      {/* Vendor Logos Section */}
      <section className="py-16 border-t border-slate-800/50 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.25em]">Trusted by Industry Leaders</p>
        </div>
        
        <div className="flex overflow-hidden relative w-full">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex space-x-24 items-center w-max px-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...vendors, ...vendors].map((vendor, i) => (
              <div key={i} className="flex items-center justify-center w-40 h-16 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img 
                  src={`https://logo.clearbit.com/${vendor.domain}`} 
                  alt={`${vendor.name} logo`} 
                  className="max-h-12 max-w-full object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-2xl font-bold text-slate-300 tracking-wider">{vendor.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats/Preview Section */}
      <section className="py-24 relative border-y border-slate-800/50 bg-slate-900/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-accent/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-800/50">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Enterprise Clients", value: "500+" },
              { label: "Cities Covered", value: "50+" },
              { label: "Uptime Guarantee", value: "99.9%" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-cyan-accent-light/80 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-accent/50 to-transparent"></div>
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                Comprehensive IT and Telecom infrastructure tailored for modern scale.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Network Infrastructure", icon: <Network className="h-7 w-7" />, desc: "High-performance LAN/WAN, structured cabling, and enterprise routing." },
              { title: "Power Systems", icon: <Zap className="h-7 w-7" />, desc: "Uninterruptible power supplies, generators, and smart grid solutions." },
              { title: "Security & Surveillance", icon: <ShieldCheck className="h-7 w-7" />, desc: "Advanced IP CCTV, biometric access, and thermal imaging systems." },
              { title: "Data Centers", icon: <Server className="h-7 w-7" />, desc: "Complete server room design, cooling, and management solutions." },
              { title: "Software Development", icon: <Code className="h-7 w-7" />, desc: "Custom web applications, portals, and system integration." },
              { title: "Optical Fiber Networks", icon: <Globe2 className="h-7 w-7" />, desc: "Turnkey fiber connectivity, splicing, testing, and maintenance." }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-3xl bg-slate-900/40 backdrop-blur-xl p-10 border border-slate-800/60 hover:border-cyan-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,139,139,0.1)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-accent/10 rounded-full blur-[40px] -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 text-cyan-accent group-hover:bg-cyan-accent group-hover:text-white transition-all duration-500 shadow-lg shadow-cyan-accent/5 border border-slate-700/50 group-hover:border-cyan-accent group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-accent-light transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Coverage Globe Section */}
      <NetworkCoverage />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-accent-dark/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 rounded-[3rem] p-12 md:p-24 shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                Ready to upgrade your infrastructure?
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto mb-10">
                Partner with Premier Solutions to build a resilient, scalable, and secure technological foundation for your business.
              </p>
              <div>
                <Link to="/contactus" className="group inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-slate-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300">
                  Get a Custom Proposal
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
