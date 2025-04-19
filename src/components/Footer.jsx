import React from 'react';

function Footer() {
  return (
    <footer className="bg-[var(--dark-secondary)] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com" className="text-[var(--text-primary)] hover:text-[var(--hover-blue)] transition-colors duration-200">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-[var(--text-primary)] hover:text-[var(--hover-blue)] transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="text-[var(--text-primary)] hover:text-[var(--hover-blue)] transition-colors duration-200">
              Twitter
            </a>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;