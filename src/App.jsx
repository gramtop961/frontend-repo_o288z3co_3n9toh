import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Uploader from './components/Uploader.jsx';
import Features from './components/Features.jsx';
import AuthModal from './components/AuthModal.jsx';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  const openAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(60%_60%_at_50%_0%,#0b1220_0%,#050810_60%,#02040a_100%)] text-white">
      <Navbar onOpenAuth={openAuth} />
      <main>
        <Hero onGetStarted={() => openAuth('signup')} />
        <Uploader onRequireAuth={() => openAuth('signup')} />
        <Features />
      </main>
      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} onModeChange={setAuthMode} />
    </div>
  );
}

export default App;
