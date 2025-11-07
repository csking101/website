import { NextResponse } from 'next/server';
import { getContentItems } from '@/lib/content';

export async function GET() {
  try {
    const projects = getContentItems('projects');
    
    const projectsData = projects.map((project) => ({
      slug: project.slug,
      title: project.metadata.title,
      description: project.excerpt || '',
      technologies: project.metadata.technologies || [],
      github: project.metadata.github,
      demo: project.metadata.demo,
      featured: project.metadata.featured || false,
    }));
    
    return NextResponse.json(projectsData);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
