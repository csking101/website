import { NextResponse } from 'next/server';
import { getContentItems } from '@/lib/content';

export async function GET() {
  try {
    const hackathons = getContentItems('hackathons');
    
    const hackathonsData = hackathons.map((hack) => ({
      slug: hack.slug,
      title: hack.metadata.title,
      project: hack.metadata.project || hack.metadata.title,
      description: hack.excerpt || '',
      award: hack.metadata.award,
      technologies: hack.metadata.technologies || [],
      hackathon: hack.metadata.hackathon || '',
      date: hack.metadata.date,
      github: hack.metadata.github,
      demo: hack.metadata.demo,
    }));
    
    return NextResponse.json(hackathonsData);
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 });
  }
}
