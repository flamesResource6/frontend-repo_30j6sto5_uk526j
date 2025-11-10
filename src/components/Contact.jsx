import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Contact</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="How can I help?" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition">Send</button>
            {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
          </form>

          <div>
            <p className="text-gray-600">Let’s connect! I’m open to freelance work, full‑time roles, or just chatting about the web.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">GitHub</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
