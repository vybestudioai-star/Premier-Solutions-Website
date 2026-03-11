import { motion } from "framer-motion";
import { Network, Cable, ArrowRight, CheckCircle2, Cctv, AppWindow, Layers } from "lucide-react";
import { Link } from "react-router-dom";

export function Services() {
  const servicesData = [
    {
      id: "fiber",
      title: "Optical Fiber",
      icon: <Cable className="h-8 w-8" strokeWidth={1.5} />,
      description: "Premier Solutions provides fiber optic complete solutions and connectivity over long distances on turnkey basis jobs including Right of way, digging, laying, splicing, testing and commissioning etc.",
      list: [
        "Optical Fiber Distribution Frames(ODF) both Rack & Wall Mount",
        "Optical Fiber Patch Cords (FC, SC, LC, ST, MU and MTJR types)",
        "Optical Fiber Adapters (FC, SC, LC, ST etc.)",
        "Optical Fiber Attenuators (FC, SC, LC, ST etc.)",
        "Optical Fiber Splitters (Couplers)",
        "Optical Fiber to Ethernet Media Converters",
        "Fusion Splicing Machine, Cleavers, Strippers, Visual Fault Locator",
        "Optical Fiber Cable preparation Tool Kit",
        "Optical Fiber Network and Installation",
        "Fiber Optic Multiplexers etc."
      ]
    },
    {
      id: "network",
      title: "Network Solutions",
      icon: <Network className="h-8 w-8" strokeWidth={1.5} />,
      description: "We provide the total Network solutions, Establishment of Local Area Network (LAN), Wide Area Network (WAN), and Dial-Up Network according to our customers’ requirement. We have qualified technical staff, and they suggest the best and suitable networking solution.",
      list: [
        "CAT 5/6/7 (Structure Cable laying / termination)",
        "Fiber Optic (Laying, Splicing, Termination)",
        "Microsoft Servers",
        "Linux based servers"
      ]
    },
    {
      id: "surveillance",
      title: "Surveillance Systems",
      icon: <Cctv className="h-8 w-8" strokeWidth={1.5} />,
      description: "Premier Solutions is a one stop for all kinds of security solutions, and can help your business to mitigate physical security risks in today’s volatile environment. Our innovative video surveillance products include a variety of network surveillance and explosion proof cameras, wireless surveillance systems, network video recorders, and video management systems etc.",
      list: [
        "Security Operations Center Deployments",
        "IP/CCTV",
        "Road Furnishing",
        "Biometric/Facial/Retina Scan",
        "RFID/Access Control",
        "Thermal Imaging",
        "Video Analytics"
      ]
    },
    {
      id: "web",
      title: "Web Development",
      icon: <AppWindow className="h-8 w-8" strokeWidth={1.5} />,
      description: "We help you go beyond your current application landscape and embrace a dynamic, fast-paced approach to IT. By offering a full suite of web application development, modernization and management services, we can help you through each stage of your application lifecycle.",
      list: [
        "Custom and platform-based web applications",
        "Digitalize internal operations",
        "Customer-facing services",
        "Highly adaptable responsive design",
        "Best user experience across devices"
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-40 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/network/1920/1080?blur=10')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-3 py-1 text-xs font-medium text-cyan-accent-light uppercase tracking-wider mb-4">
              Our Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent-light to-blue-400">Finest Solutions</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed font-light">
              “Premier Solutions” is a renowned Nation Wide and is proud to present its integrated technology services and solutions as well as its networking solutions in Pakistan. Over the time the company has grown enormously providing state-of-the-art solutions bringing the latest innovative technologies to its client.
            </p>
            <div className="pt-8">
              <Link to="/contactus" className="inline-flex h-14 items-center justify-center rounded-xl bg-cyan-accent px-8 text-base font-medium text-white shadow-[0_0_20px_-5px_rgba(0,139,139,0.5)] hover:bg-cyan-accent-light hover:shadow-[0_0_30px_-5px_rgba(0,139,139,0.7)] hover:-translate-y-0.5 transition-all group">
                Contact us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-32 relative">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="space-y-32">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-cyan-accent shadow-lg shadow-cyan-accent/10 border border-slate-800 relative group">
                    <div className="absolute inset-0 bg-cyan-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">{service.icon}</div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-accent to-transparent rounded-full"></div>
                  <p className="text-xl text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                
                {/* Feature List Card */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-slate-900/40 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-slate-800/60 hover:border-cyan-accent/30 transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                        <Layers className="h-5 w-5 mr-3 text-cyan-accent" strokeWidth={2} />
                        Key Offerings
                      </h3>
                      <ul className="space-y-5">
                        {service.list.map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <CheckCircle2 className="h-5 w-5 text-cyan-accent/70 mr-4 mt-0.5 flex-shrink-0 group-hover/item:text-cyan-accent transition-colors" />
                            <span className="text-slate-300 font-light leading-relaxed group-hover/item:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
