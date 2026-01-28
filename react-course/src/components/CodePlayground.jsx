import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check, Maximize2, Minimize2, Layout } from 'lucide-react';

const CodePlayground = ({ initialHtml = '', initialCss = '', initialJs = '', height = '400px' }) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [srcDoc, setSrcDoc] = useState('');
  const [activeTab, setActiveTab] = useState('html');
  const [isCopied, setIsCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}<\/script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const copyCode = () => {
    const code = activeTab === 'html' ? html : activeTab === 'css' ? css : js;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const resetCode = () => {
    if (window.confirm('Desejas repor o código original?')) {
      setHtml(initialHtml);
      setCss(initialCss);
      setJs(initialJs);
    }
  };

  return (
    <div className={`
      flex flex-col border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl
      ${isFullscreen ? 'fixed inset-4 z-[100] h-auto' : `h-[${height}]`}
    `} style={{ height: isFullscreen ? 'calc(100vh - 32px)' : height }}>

      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
        <div className="flex gap-2">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all
                ${activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={copyCode} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Copiar código">
            {isCopied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
          </button>
          <button onClick={resetCode} className="p-2 text-slate-400 hover:text-orange-500 transition-colors" title="Repor código">
            <RotateCcw size={16} />
          </button>
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Editor & Preview Split */}
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* Editor Area */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 relative">
          <textarea
            className="w-full h-full p-4 bg-slate-950 text-blue-300 font-mono text-sm focus:outline-none resize-none scrollbar-thin scrollbar-thumb-slate-800"
            value={activeTab === 'html' ? html : activeTab === 'css' ? css : js}
            onChange={(e) => {
              if (activeTab === 'html') setHtml(e.target.value);
              else if (activeTab === 'css') setCss(e.target.value);
              else setJs(e.target.value);
            }}
            spellCheck="false"
          />
          <div className="absolute bottom-4 right-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest pointer-events-none">
            Editor Interativo
          </div>
        </div>

        {/* Preview Area */}
        <div className="w-full md:w-1/2 bg-white relative">
          <iframe
            srcDoc={srcDoc}
            title="preview"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="bg-white"
          />
          <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-slate-100/80 backdrop-blur rounded text-[9px] font-black text-slate-400 uppercase tracking-widest pointer-events-none border border-slate-200/50">
            <Layout size={10} /> Preview em Tempo Real
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
