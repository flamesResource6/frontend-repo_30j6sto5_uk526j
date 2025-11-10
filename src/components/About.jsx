export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a frontend developer focused on crafting clean, accessible, and performant web experiences. I enjoy working with React, TypeScript, and modern tooling to build interfaces that feel fast and intentional. I care about UX details, design systems, and maintainable code.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="rounded-md border border-gray-200 bg-white px-3 py-2">React</li>
              <li className="rounded-md border border-gray-200 bg-white px-3 py-2">TypeScript</li>
              <li className="rounded-md border border-gray-200 bg-white px-3 py-2">Tailwind CSS</li>
              <li className="rounded-md border border-gray-200 bg-white px-3 py-2">Framer Motion</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Workspace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
