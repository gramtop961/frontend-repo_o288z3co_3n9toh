import { useState, useEffect } from 'react';
import { X, Mail, Lock, User, Github, LogIn } from 'lucide-react';

export default function AuthModal({ open, mode = 'signin', onClose, onModeChange }) {
  const [current, setCurrent] = useState(mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => setCurrent(mode), [mode]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // Backend endpoints can be wired later; this is a UI-only stub.
      await new Promise((r) => setTimeout(r, 700));
      setMessage(current === 'signup' ? 'Account created. You can sign in now.' : 'Signed in (demo).');
      if (current === 'signup') onModeChange?.('signin');
    } catch (err) {
      setMessage('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020]/95 p-6 shadow-2xl">
        <button onClick={onClose} className="absolute right-3 top-3 rounded-lg p-1.5 hover:bg-white/10">
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
          <div>
            <h3 className="font-semibold">{current === 'signup' ? 'Create your account' : 'Welcome back'}</h3>
            <p className="text-xs text-white/60">Upload a photo and get AI-crafted outfits</p>
          </div>
        </div>

        <div className="mt-4 flex rounded-lg bg-white/5 p-1 text-sm">
          <button onClick={() => onModeChange?.('signin')} className={`flex-1 rounded-md px-3 py-2 ${current === 'signin' ? 'bg-white/15' : 'hover:bg-white/10'}`}>Sign in</button>
          <button onClick={() => onModeChange?.('signup')} className={`flex-1 rounded-md px-3 py-2 ${current === 'signup' ? 'bg-white/15' : 'hover:bg-white/10'}`}>Create account</button>
        </div>

        <form onSubmit={submit} className="mt-4 space-y-3">
          {current === 'signup' && (
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Full name" className="w-full rounded-lg border border-white/10 bg-white/5 px-10 py-2 outline-none placeholder:text-white/40 focus:border-white/20" />
            </div>
          )}
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email address" className="w-full rounded-lg border border-white/10 bg-white/5 px-10 py-2 outline-none placeholder:text-white/40 focus:border-white/20" />
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="w-full rounded-lg border border-white/10 bg-white/5 px-10 py-2 outline-none placeholder:text-white/40 focus:border-white/20" />
          </div>
          {message && <p className="text-xs text-white/70">{message}</p>}
          <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-500 px-4 py-2 font-medium disabled:opacity-60">
            {loading ? 'Please wait…' : current === 'signup' ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#0a1020] px-2 text-white/50">or continue with</span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <LogIn className="h-4 w-4" /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
