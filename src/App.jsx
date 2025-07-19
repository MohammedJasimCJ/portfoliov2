import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Mohammed Jasim CJ</h1>
            <div className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Building modern web applications with React, Node.js, and MongoDB
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            View My Work
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* React Todo App */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">React Todo App</h3>
              <p className="text-gray-600 mb-4">
                A modern todo application built with React, Tailwind CSS, and localStorage persistence.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Tailwind</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Vite</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                <a href="https://github.com/MohammedJasimCJ/react-todo-app" className="text-gray-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Mohammed Jasim CJ. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
