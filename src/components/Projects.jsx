const projects = [
  {
    title: 'Design System UI Kit',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    description:
      'A reusable component library built with React and Tailwind, focused on accessibility and speed.',
    link: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2Mjc1MzI3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Responsive dashboard with charts, filters, and data exploration using modern web APIs.',
    link: 'https://example.com',
  },
  {
    title: 'Marketing Site Revamp',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    description:
      'A high-performance landing experience with smooth animations and SEO best practices.',
    link: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Projects</h2>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-md border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-50"
          >
            Need something similar?
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4">
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                    View Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
