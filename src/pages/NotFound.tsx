import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Home, HelpCircle } from "lucide-react";

const TerminalLogs = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const lines = [
    "> Initializing scan of virtual directory...",
    "> Error: Route not mapped in router configuration.",
    "> Checking local repository database...",
    "> Warning: Memory leak of curiosity detected.",
    "> Redirecting penguin scouts...",
    "> 🐧 Scout reports: Destination is empty space.",
    "> Suggestion: Turn back or warp to the home base."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setLogs(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-left text-xs md:text-sm text-accent/80 space-y-1">
      {logs.map((log, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {log}
        </motion.div>
      ))}
      {logs.length < lines.length && (
        <span className="animate-pulse inline-block w-2 h-4 bg-accent ml-1">▋</span>
      )}
    </div>
  );
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const floatingSymbols = [
    { text: "const", top: "15%", left: "10%", delay: 0 },
    { text: "void 0", top: "25%", left: "80%", delay: 1.5 },
    { text: "{}", top: "70%", left: "15%", delay: 0.8 },
    { text: "[]", top: "60%", left: "85%", delay: 2.2 },
    { text: "=>", top: "80%", left: "45%", delay: 1.2 },
    { text: "404", top: "10%", left: "75%", delay: 3 },
    { text: "🐧", top: "45%", left: "5%", delay: 2 },
    { text: "undefined", top: "40%", left: "90%", delay: 0.5 }
  ];

  return (
    <div className="dark min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-start pt-20 md:pt-28 p-6 relative overflow-hidden graph-paper paper-texture" style={{ perspective: 1200 }}>
      {/* Floating Background Elements */}
      {floatingSymbols.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute text-accent/20 font-mono text-base md:text-lg pointer-events-none select-none"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10 + idx * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* Main Container */}
      <div className="max-w-2xl w-full text-center z-10 flex flex-col items-center">
        {/* Slow Spinning name with Nabla Font in 3D, anchored at the bottom */}
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
          className="font-nabla text-5xl md:text-7xl mb-12 select-none pointer-events-none inline-block tracking-wide"
        >
          IRFAN IR
        </motion.div>

        {/* 404 Header Area */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 tracking-wider font-marker select-none filter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            404
          </h1>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 text-accent"
          >
            <HelpCircle className="w-8 h-8 animate-bounce" />
          </motion.div>
        </motion.div>

        {/* Catchy description */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-handwriting text-2xl md:text-3xl text-foreground/90 mb-6"
        >
          Even quantum superposition has limits. You are officially lost.
        </motion.h2>

        {/* Mock Terminal Console */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full bg-[#160d23] border border-accent/30 rounded-lg shadow-2xl p-4 mb-10 overflow-hidden text-left relative"
        >
          {/* Terminal Window Header Buttons */}
          <div className="flex gap-1.5 mb-3 border-b border-accent/10 pb-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="text-[10px] md:text-xs font-mono text-muted-foreground ml-3 select-none flex items-center gap-1">
              <Terminal className="w-3 h-3" /> system_error_log.sh
            </span>
          </div>
          
          <TerminalLogs />
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-3.5 font-medium transition-all duration-300 border-2 font-marker bg-background text-foreground border-accent rounded-[4px_12px_4px_12px] hover:shadow-[4px_4px_0_0] hover:shadow-accent/50 hover:bg-accent/10"
          >
            <Home className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Warp to Safety (Go Home)
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
