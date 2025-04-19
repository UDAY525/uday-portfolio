import React from 'react';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-6">
          A passionate frontend developer building modern, user-friendly web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-[var(--accent-blue)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--hover-blue)] transition-colors duration-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;