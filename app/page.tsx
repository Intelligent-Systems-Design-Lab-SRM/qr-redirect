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
          
          <div className="mb-8 relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/logo.png"
              alt="ISD Lab Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
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

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              href="https://robofest.in"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              RoboFest
            </Link>
            
            <Link 
              href="https://isdlabsrm.in"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              ISD Lab
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