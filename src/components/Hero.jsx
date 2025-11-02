import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero({ onGetStarted }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]);

  return (
    <section ref={ref} className="relative">
      <div className="relative h-[70vh] md:h-[78vh] lg:h-[86vh] w-full">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlays must not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0612] via-[#0a0612]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_20%,rgba(244,114,182,0.28)_0%,rgba(217,70,239,0)_60%)]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div style={{ y, opacity }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-pink-300" />
              New: AI outfit suggestions from a single selfie
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Aesthetic wardrobe guidance. Upload a photo, get looks in vibrant pink & purple vibes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="mt-5 text-base md:text-lg text-white/85"
            >
              Our model analyzes your tones, vibe and context to recommend complete outfits—tops, bottoms, shoes, and accessories—tailored to your style goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
              className="mt-8 flex items-center gap-3"
            >
              <button onClick={onGetStarted} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:via-fuchsia-400 hover:to-purple-500 shadow-xl shadow-fuchsia-500/30">
                Get started free
              </button>
              <a href="#features" className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">See features</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
