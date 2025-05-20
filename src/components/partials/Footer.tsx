import React from 'react';

const Footer = () => {
  return (
    <footer className="container mt-auto border-t border-gray-200 py-6 text-center text-gray-500 dark:border-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
        <ul className="space-y-2 text-sm grid grid-cols-2">
          <li>Email: <a href="mailto:amjadtadmory@gmail.com" className="text-blue-400 hover:underline">amjadtadmory@gmail.com</a></li>
          <li>Phone: <a href="tel:+201026808501" className="text-blue-400 hover:underline">+20 102 680 8501</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/amjad-ghassan-b82033330/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/amjad-ghassan</a></li>
          <li>GitHub: <a href="https://github.com/amjad-tadmorey" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/amjad-tadmorey</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
