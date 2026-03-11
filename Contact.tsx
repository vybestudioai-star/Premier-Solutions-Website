import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* Header */}
      <section className="bg-slate-950 pt-40 pb-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-accent-dark/20 via-slate-950 to-slate-950"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent-light to-blue-400">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            Get in Touch With Us & We'll Assist Your Business
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                  Visit us
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-accent to-transparent rounded-full mb-8"></div>
                <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light">
                  We are ready to help you with your IT and Telecom needs. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-accent shadow-lg shadow-cyan-accent/5 border border-slate-700 group-hover:border-cyan-accent/50 transition-colors">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Office Address</h3>
                    <p className="text-lg text-slate-400 font-light group-hover:text-slate-300 transition-colors">70-D, New Muslim Town,<br/>Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-accent shadow-lg shadow-cyan-accent/5 border border-slate-700 group-hover:border-cyan-accent/50 transition-colors">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
                    <a href="callto:+923214776985" className="text-lg text-slate-400 font-light hover:text-cyan-accent transition-colors">Mob: +92-321-4776985</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-accent shadow-lg shadow-cyan-accent/5 border border-slate-700 group-hover:border-cyan-accent/50 transition-colors">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
                    <a href="mailto:info@premier-solution.net" className="text-lg text-slate-400 font-light hover:text-cyan-accent transition-colors">info@premier-solution.net</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-slate-800"
            >
              <h2 className="text-3xl font-bold text-white tracking-tight mb-8">
                Let's Talk
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-cyan-accent transition-all bg-slate-800/50 hover:bg-slate-800 text-white placeholder-slate-500" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-cyan-accent transition-all bg-slate-800/50 hover:bg-slate-800 text-white placeholder-slate-500" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-cyan-accent transition-all bg-slate-800/50 hover:bg-slate-800 text-white placeholder-slate-500" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-cyan-accent transition-all bg-slate-800/50 hover:bg-slate-800 text-white placeholder-slate-500" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-cyan-accent transition-all bg-slate-800/50 hover:bg-slate-800 text-white placeholder-slate-500 resize-none" placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" className="w-full inline-flex h-14 items-center justify-center rounded-xl bg-cyan-accent px-8 text-base font-medium text-white shadow-[0_0_20px_-5px_rgba(0,139,139,0.5)] hover:bg-cyan-accent-light hover:shadow-[0_0_30px_-5px_rgba(0,139,139,0.7)] hover:-translate-y-0.5 transition-all">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
