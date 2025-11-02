import { useMemo } from 'react';
import { LogIn, User } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar({ onOpenAuth }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  // Shadow opacity increases slightly as you scroll
  const shadow = useMemo(() => 'shadow-[0_10px_30px_-10px_rgba(37,99,235,0.25)]', []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10 ${shadow}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
          <span className="text-lg font-semibold tracking-tight">FitGenius AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => onOpenAuth('signin')} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg text-white/80 hover:text-white transition">
            <LogIn className="h-4 w-4" /> Sign in
          </button>
          <button onClick={() => onOpenAuth('signup')} className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-500 shadow-lg shadow-blue-500/30">
            <User className="h-4 w-4" /> Get started
          </button>
        </div>
      </div>
      {/* Subtle scroll progress bar */}
      <motion.div style={{ scaleX }} className="origin-left h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />
    </header>
  );
}
