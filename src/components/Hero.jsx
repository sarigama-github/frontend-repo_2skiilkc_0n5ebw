import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[400px] md:h-[520px] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Meet, study, and connect. Effortlessly.
          </h1>
          <p className="mt-3 md:mt-4 text-neutral-700 md:text-lg max-w-2xl">
            LinkUp proposes smart meetups with friends and classmates using your free time, interests, and campus network.
          </p>
          <div className="mt-4 md:mt-6 flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Get Started</button>
            <button className="px-4 py-2 rounded-lg bg-white text-neutral-900 font-semibold border border-neutral-200 hover:border-neutral-300">See How It Works</button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
    </section>
  )
}
