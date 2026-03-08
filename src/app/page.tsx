"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Sparkles, Image as ImageIcon, Check } from "lucide-react";

export default function Home() {
  const [title, setTitle] = useState("Your Dynamic API");
  const [subtitle, setSubtitle] = useState("Generate social preview images on the edge");
  const [bg, setBg] = useState("#0f172a");
  const [color, setColor] = useState("#ffffff");
  const [theme, setTheme] = useState("glassy");
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("/api/og?title=Your+Dynamic+API&subtitle=Generate+social+preview+images+on+the+edge&bg=%230f172a&color=%23ffffff&theme=glassy");
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    // Generate the URL snippet dynamically
    const params = new URLSearchParams();
    if (title) params.append("title", title);
    if (subtitle) params.append("subtitle", subtitle);
    if (bg) params.append("bg", bg.replace('#', '%23'));
    if (color) params.append("color", color.replace('#', '%23'));
    if (theme) params.append("theme", theme);

    // Construct the query string directly because URLSearchParams escapes `%23` again to `%2523` if you're not careful, 
    // actually let's just use string templates for colors
    const queryString = `title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}&bg=${encodeURIComponent(bg)}&color=${encodeURIComponent(color)}&theme=${theme}`;
    const relativeUrl = `/api/og?${queryString}`;

    setUrl(relativeUrl);
    setFullUrl(`${window.location.origin}${relativeUrl}`);
  }, [title, subtitle, bg, color, theme]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans">
      <nav className="border-b border-indigo-500/10 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            <Sparkles className="text-indigo-400 w-5 h-5" />
            OG Gen.
          </div>
          <div className="text-sm text-slate-400 flex items-center gap-4">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-800 text-xs">Edge Network</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Controls Editor Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-indigo-400" /> Image Settings
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Headline</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-white placeholder-slate-600"
                    placeholder="Enter main headline"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Subtitle</label>
                  <textarea
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none text-white placeholder-slate-600"
                    rows={2}
                    placeholder="Enter description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Background</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="color"
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                        className="w-8 h-8 rounded shrink-0 cursor-pointer border border-slate-700 bg-transparent p-0 clip-circle"
                      />
                      <input
                        type="text"
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-sm text-slate-300 font-mono w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Text Color</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-8 h-8 rounded shrink-0 cursor-pointer border border-slate-700 bg-transparent p-0 clip-circle"
                      />
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-sm text-slate-300 font-mono w-full"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Theme Style</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['glassy', 'retro', 'dots'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`text-xs py-2 px-3 rounded-lg border capitalize transition-all ${theme === t
                          ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-400'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Preview & Export */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {/* Live Render Area */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-xl flex items-center justify-center min-h-[400px]">
              {/* Aspect ratio container simulating Twitter/FB Open Graph card size */}
              <div
                className="w-full max-w-3xl aspect-[1200/630] rounded-xl overflow-hidden shadow-2xl relative border border-slate-800/50"
              >
                <img
                  key={url} // force re-render on url change
                  src={url}
                  alt="Dynamic Open Graph Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Generated API Endpoint Call */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wide">Generated Edge API Route</h3>
              <p className="text-sm text-slate-400 mb-4">
                Use this URL in your meta tags. The Next.js Edge Runtime will render the PNG dynamically.
              </p>

              <div className="flex items-center gap-3">
                <div className="flex-1 overflow-hidden bg-black/40 border border-slate-800/60 rounded-lg relative px-4 py-3 font-mono text-xs text-slate-300 whitespace-nowrap overflow-x-auto">
                  {fullUrl || url}
                </div>
                <button
                  onClick={handleCopy}
                  className="shrink-0 flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied URL!' : 'Copy API URL'}
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </main>
    </div>
  );
}
