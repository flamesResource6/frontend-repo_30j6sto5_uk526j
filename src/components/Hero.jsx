import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        <img
          src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1080&auto=format&fit=crop"
          alt="Profile"
          className="h-28 w-28 md:h-32 md:w-32 rounded-full ring-4 ring-white shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Alex Johnson</h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600">Frontend Developer | Web Enthusiast</p>
          <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-blue-200 bg-white px-5 py-2.5 text-blue-700 hover:bg-blue-50 transition">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
