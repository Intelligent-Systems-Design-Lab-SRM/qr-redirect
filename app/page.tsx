import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col items-center text-center">
          
          <div className="mb-8 flex flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src="/isd-logo.svg"
                alt="ISD Lab Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src="/robofest-logo.svg"
                alt="RoboFest Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-4">
            QR Redirect Service
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-medium mb-6">
            Intelligent Systems Design Lab
          </p>

          <p className="text-base text-zinc-500 mb-10 leading-relaxed max-w-md mx-auto">
            This service powers the dynamic QR codes printed on ISD Lab, RoboFest, and club merchandise.
          </p>

          <div className="flex items-center justify-center gap-3 px-6 py-3 bg-black/40 border border-white/10 rounded-full mb-10 shadow-inner">
            <span className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">Status</span>
            <div className="w-1 h-4 bg-zinc-700 mx-2 rounded-full" />
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Online
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center flex-wrap">
            <Link 
              href="https://robofest.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              RoboFest
            </Link>
            
            <Link 
              href="https://isdlabsrm.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              ISD Lab
            </Link>

            <Link 
              href="https://github.com/Intelligent-Systems-Design-Lab-SRM/qr-redirect"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#24292e]/80 text-white font-semibold hover:bg-[#24292e] border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub Repo
            </Link>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center text-zinc-500 text-sm z-20">
        Made by <a href="https://harshilmalhotra.dev" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-200 font-medium">Harshil Malhotra</a>
      </div>
    </main>
  );
}