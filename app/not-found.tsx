import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[30%] h-[30%] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30%] h-[30%] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center">
          
          <div className="mb-6 relative w-20 h-20 opacity-50">
            <Image
              src="/logo.png"
              alt="ISD Lab Logo"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-2 drop-shadow-sm">
            404
          </h1>

          <h2 className="text-2xl font-bold text-zinc-200 mb-4">
            Page Not Found
          </h2>

          <p className="text-zinc-500 mb-8 max-w-sm">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link 
            href="/"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}