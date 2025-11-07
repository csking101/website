'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  image: string;
}

interface Hackathon {
  slug: string;
  title: string;
  project: string;
  description: string;
  award?: string;
  technologies: string[];
  hackathon: string;
  date: string;
  github?: string;
  demo?: string;
  image: string;
}

// Emoji mapping for projects and hackathons
const getEmoji = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('ai') || lowerTitle.includes('ml')) return '🤖';
  if (lowerTitle.includes('health') || lowerTitle.includes('medical')) return '🏥';
  if (lowerTitle.includes('climate') || lowerTitle.includes('carbon') || lowerTitle.includes('eco')) return '🌍';
  if (lowerTitle.includes('study') || lowerTitle.includes('education')) return '📖';
  if (lowerTitle.includes('collab') || lowerTitle.includes('real-time')) return '🔄';
  if (lowerTitle.includes('finance') || lowerTitle.includes('money')) return '💰';
  if (lowerTitle.includes('doc') || lowerTitle.includes('generator')) return '📚';
  return '💡';
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'hackathons'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, hackathonsRes] = await Promise.all([
          fetch('/api/content/projects'),
          fetch('/api/content/hackathons')
        ]);
        
        const projectsData = await projectsRes.json();
        const hackathonsData = await hackathonsRes.json();
        
        setProjects(projectsData.map((p: any) => ({
          ...p,
          image: getEmoji(p.title)
        })));
        
        setHackathons(hackathonsData.map((h: any) => ({
          ...h,
          image: getEmoji(h.project || h.title)
        })));
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className=" mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Hackathons
          </h1>
          <p className="text-xl text-gray-600">
            Building solutions, one project at a time. Explore my work and hackathon adventures.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex gap-4 border-b border-gray-200 justify-center">
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
            {featuredProjects.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden block"
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
                            <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </span>
                          )}
                          {project.demo && (
                            <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden block"
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

                        <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                          View Project
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {projects.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No projects yet
                </h3>
                <p className="text-gray-600">Check back soon for new projects!</p>
              </div>
            )}
          </div>
        )}

        {/* Hackathons Tab */}
        {activeTab === 'hackathons' && (
          <div className="max-w-6xl mx-auto">
            {hackathons.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {hackathons.map((hack) => (
                  <Link
                    key={hack.slug}
                    href={`/hackathons/${hack.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden block"
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
                        {hack.hackathon} • {new Date(hack.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
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
                          <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </span>
                        )}
                        {hack.demo && (
                          <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg">
                            View Project
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No hackathons yet
                </h3>
                <p className="text-gray-600">Check back soon for hackathon projects!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
