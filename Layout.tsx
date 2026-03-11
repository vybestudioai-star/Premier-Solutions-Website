import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact us", path: "/contactus" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 flex flex-col selection:bg-cyan-accent/30 selection:text-cyan-accent-light">
      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://res.cloudinary.com/dssguyuxh/image/upload/v1773084638/logo-removebg-preview_apbrvg.png" 
              alt="Premier Solutions" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-all duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] sm:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-slate-800/50 ${
                  location.pathname === link.path
                    ? "text-cyan-accent-light"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href="mailto:info@premier-solution.net"
              className="inline-flex items-center justify-center rounded-full bg-cyan-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_-5px_rgba(0,139,139,0.5)] hover:bg-cyan-accent-light hover:shadow-[0_0_30px_-5px_rgba(0,139,139,0.7)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-6 px-4 flex flex-col space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-cyan-accent/10 text-cyan-accent-light border border-cyan-accent/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-4">
              <a
                href="mailto:info@premier-solution.net"
                className="flex w-full items-center justify-center rounded-xl bg-cyan-accent px-4 py-3.5 text-sm font-semibold text-white shadow-lg"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-accent-dark/10 via-slate-950 to-slate-950"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img 
                src="https://res.cloudinary.com/dssguyuxh/image/upload/v1773084638/logo-removebg-preview_apbrvg.png" 
                alt="Premier Solutions" 
                className="h-14 w-auto object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] sm:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-400 leading-relaxed font-light max-w-sm mb-8">
              Architecting the digital future. IT & Telecom solution providers distributing the finest infrastructure solutions across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-accent hover:text-white hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-accent hover:text-white hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-accent hover:text-white hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold mb-6 tracking-wider uppercase text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Home</Link></li>
              <li><Link to="/aboutus" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">About us</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Products</Link></li>
              <li><Link to="/contactus" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 tracking-wider uppercase text-xs">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Network Infrastructure</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Power Systems</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Fiber Optics</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-accent-light transition-colors inline-block hover:translate-x-1 duration-300">Security & Surveillance</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 tracking-wider uppercase text-xs">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start text-slate-400 group">
                <MapPin className="h-5 w-5 mr-3 text-cyan-accent/70 group-hover:text-cyan-accent transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">70-D, New Muslim Town,<br />Lahore, Pakistan</span>
              </li>
              <li className="flex items-center text-slate-400 group">
                <Phone className="h-5 w-5 mr-3 text-cyan-accent/70 group-hover:text-cyan-accent transition-colors shrink-0" />
                <a href="callto:+923214776985" className="hover:text-cyan-accent-light transition-colors">Mob: +92-321-4776985</a>
              </li>
              <li className="flex items-center text-slate-400 group">
                <Mail className="h-5 w-5 mr-3 text-cyan-accent/70 group-hover:text-cyan-accent transition-colors shrink-0" />
                <a href="mailto:info@premier-solution.net" className="hover:text-cyan-accent-light transition-colors">info@premier-solution.net</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-light">
            © {new Date().getFullYear()} Premier Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500 font-light">
            <a href="#" className="hover:text-cyan-accent-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-accent-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
