import Link from "next/link";

export default function QRHome() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/3 w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center">
          
          <div className="mb-8 p-4 bg-amber-500/20 rounded-full inline-block">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="m9 9 6 6"></path><path d="m15 9-6 6"></path></svg>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            Invalid QR Code
          </h1>

          <p className="text-zinc-400 mb-8 leading-relaxed">
            Please scan a valid ISD Lab QR code. If you believe this is an error, try scanning again or contact the team.
          </p>

          <Link 
            href="/"
            className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}