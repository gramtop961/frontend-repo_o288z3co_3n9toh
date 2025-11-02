import { useCallback, useRef, useState } from 'react';
import { Image as ImageIcon, Upload, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Uploader({ onRequireAuth }) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const inputRef = useRef(null);

  const onSelectFile = useCallback((f) => {
    const chosen = f?.[0];
    if (!chosen) return;
    if (!chosen.type.startsWith('image/')) return;
    setFile(chosen);
    const url = URL.createObjectURL(chosen);
    setPreview(url);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    onSelectFile(e.dataTransfer.files);
  }, [onSelectFile]);

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const clearFile = () => {
    setFile(null);
    setPreview('');
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleAnalyze = () => {
    onRequireAuth?.();
  };

  return (
    <section className="relative -mt-24 md:-mt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_10px_60px_-15px_rgba(217,70,239,0.45)]"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 via-fuchsia-500/20 to-purple-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-purple-600/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4 text-pink-300" />
              Try it now — upload a photo to preview AI outfit suggestions
            </div>

            {!preview ? (
              <div
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                className={`mt-4 grid place-items-center rounded-2xl border-2 border-dashed p-10 transition ${dragActive ? 'border-pink-400/60 bg-pink-400/5' : 'border-white/15 bg-white/5 hover:bg-white/10'}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 via-fuchsia-500/20 to-purple-600/20 ring-1 ring-white/20">
                    <ImageIcon className="h-7 w-7 text-pink-300" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">Drop your image here</h3>
                  <p className="mt-1 text-sm text-white/70">PNG, JPG up to 10MB</p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-4 py-2 hover:from-pink-400 hover:via-fuchsia-400 hover:to-purple-500"
                    >
                      <Upload className="h-4 w-4" /> Choose image
                    </button>
                    <span className="text-xs text-white/60">or drag & drop</span>
                  </div>
                </div>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => onSelectFile(e.target.files)}
                  className="sr-only"
                />
              </div>
            ) : (
              <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={clearFile}
                    className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-black/40 px-2 py-1 text-xs hover:bg-black/60"
                  >
                    <X className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
                <div className="flex w-full flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-3 font-medium hover:from-pink-400 hover:via-fuchsia-400 hover:to-purple-500"
                  >
                    Get outfit suggestions
                  </button>
                  <p className="text-xs text-white/60">Sign up to see personalized looks and save your preferences.</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
