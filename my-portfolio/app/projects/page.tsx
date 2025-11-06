'use client';

import { useState } from 'react';

// Sample project data
const projects = [
  {
    id: '1',
    title: 'AI-Powered Code Review Tool',
    description: 'An intelligent code review assistant that uses machine learning to detect bugs, suggest improvements, and ensure best practices.',
    image: '🤖',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.project.com',
    date: '2024-09',
    featured: true,
  },
  {
    id: '2',
    title: 'Real-time Collaboration Platform',
    description: 'A web application enabling teams to collaborate in real-time with document editing, video calls, and project management features.',
    image: '🔄',
    technologies: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.project.com',
    date: '2024-08',
    featured: true,
  },
  {
    id: '3',
    title: 'Personal Finance Tracker',
    description: 'Mobile-first application for tracking expenses, managing budgets, and visualizing financial health with interactive charts.',
    image: '💰',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/yourusername/project',
    date: '2024-07',
    featured: false,
  },
  {
    id: '4',
    title: 'Open Source Documentation Generator',
    description: 'Automatic documentation generator for code repositories with support for multiple programming languages and export formats.',
    image: '📚',
    technologies: ['TypeScript', 'AST', 'Markdown', 'CLI'],
    github: 'https://github.com/yourusername/project',
    date: '2024-06',
    featured: false,
  },
];

const hackathons = [
  {
    id: '1',
    title: 'HealthTech Innovation Challenge',
    project: 'MediConnect - Telemedicine Platform',
    description: 'Built a telemedicine platform connecting patients with doctors, featuring video consultations, prescription management, and health records.',
    image: '🏥',
    award: '1st Place',
    technologies: ['React', 'WebRTC', 'Firebase', 'Tailwind CSS'],
    date: 'Oct 2024',
    hackathon: 'HealthHack 2024',
    github: 'https://github.com/yourusername/hackathon',
    demo: 'https://devpost.com/project',
  },
  {
    id: '2',
    title: 'Climate Action Hackathon',
    project: 'CarbonTracker - Sustainability App',
    description: 'Mobile app helping users track their carbon footprint, get personalized tips, and compete with friends to reduce environmental impact.',
    image: '🌍',
    award: 'Best UI/UX',
    technologies: ['Flutter', 'Node.js', 'ML', 'APIs'],
    date: 'Sep 2024',
    hackathon: 'EcoCode 2024',
    github: 'https://github.com/yourusername/hackathon',
  },
  {
    id: '3',
    title: 'University Hackathon 2024',
    project: 'StudyBuddy - AI Study Assistant',
    description: 'AI-powered study companion that generates personalized quizzes, creates study schedules, and provides intelligent tutoring.',
    image: '📖',
    award: 'Top 10 Finalist',
    technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL'],
    date: 'Aug 2024',
    hackathon: 'CodeFest 2024',
    github: 'https://github.com/yourusername/hackathon',
    demo: 'https://devpost.com/project',
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'hackathons'>('projects');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Hackathons
          </h1>
          <p className="text-xl text-gray-600">
            Building solutions, one project at a time. Explore my work and hackathon adventures.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'projects'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Projects
              {activeTab === 'projects' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'hackathons'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hackathons
              {activeTab === 'hackathons' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="max-w-6xl mx-auto">
            {/* Featured Projects */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <article
                      key={project.id}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    >
                      {/* Project Icon/Image */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center">
                        <div className="text-6xl mb-2">{project.image}</div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Other Projects */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => !p.featured)
                  .map((project) => (
                    <article
                      key={project.id}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center">
                        <div className="text-5xl">{project.image}</div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                          >
                            View on GitHub
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Hackathons Tab */}
        {activeTab === 'hackathons' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {hackathons.map((hack) => (
                <article
                  key={hack.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  {/* Header with Award Badge */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 relative">
                    <div className="text-5xl mb-3 text-center">{hack.image}</div>
                    {hack.award && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-md">
                        🏆 {hack.award}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Hackathon Name */}
                    <div className="text-sm font-medium text-purple-600 mb-2">
                      {hack.hackathon} • {hack.date}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {hack.project}
                    </h3>
                    <p className="text-gray-600 mb-4">{hack.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hack.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {hack.github && (
                        <a
                          href={hack.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {hack.demo && (
                        <a
                          href={hack.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}