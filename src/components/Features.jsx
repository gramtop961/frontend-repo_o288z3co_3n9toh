import { Image, Upload, Palette, CheckCircle2, Shield, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay: 0.04 * index, ease: 'easeOut' }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
  >
    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-purple-600/10 blur-2xl" />
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500/20 via-fuchsia-500/20 to-purple-600/20 flex items-center justify-center ring-1 ring-white/20">
        <Icon className="h-5 w-5 text-pink-300" />
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/70">{desc}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(244,114,182,0.20)_0%,rgba(217,70,239,0)_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your personal AI stylist</h2>
          <p className="mt-3 text-white/70">
            Upload a photo and get curated outfit recommendations that match your tones, fit preferences and occasion.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard index={0} icon={Upload} title="1. Upload your photo" desc="A simple, secure upload. We analyze posture, palette, and proportions without sharing your data." />
          <FeatureCard index={1} icon={Wand2} title="2. AI analysis" desc="Our model maps face + body geometry and color profiles to modern fits, silhouettes and palettes." />
          <FeatureCard index={2} icon={Palette} title="3. Color mastery" desc="Get palettes tuned to your undertones and vibe—earthy minimal, tech-core, smart casual and more." />
          <FeatureCard index={3} icon={Image} title="Styled looks" desc="Full outfits with tops, bottoms, shoes and accessories. Swipe through and fine-tune preferences." />
          <FeatureCard index={4} icon={CheckCircle2} title="Occasion-ready" desc="Switch between work, weekend, events or travel and get options tailored to each context." />
          <FeatureCard index={5} icon={Shield} title="Privacy first" desc="Images are processed with care. Control retention settings in your account at any time." />
        </div>

        <motion.div
          id="how"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Start in seconds</h3>
              <p className="mt-2 text-sm text-white/70">Create an account, upload a single image, and explore suggested fits instantly. Upgrade later for more looks per month.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition">View sample looks</a>
              <a href="#pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-400 hover:via-fuchsia-400 hover:to-purple-500">Pricing</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
