import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentMetadata {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  days?: string;
  location?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  project?: string;
  hackathon?: string;
  award?: string;
  readingTime?: string;
  wordCount?: number;
  updated?: string;
  [key: string]: string | string[] | boolean | number | undefined;
}

export interface ContentItem {
  slug: string;
  metadata: ContentMetadata;
  excerpt?: string;
}

/**
 * Get all markdown files from a content directory
 */
export function getContentItems(contentType: "blogs" | "notes" | "research" | "travel" | "projects" | "hackathons" | "food" | "books" | "sports"): ContentItem[] {
  const contentDir = path.join(process.cwd(), `content/${contentType}`);

  // Check if directory exists
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const items = markdownFiles.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const stats = fs.statSync(filePath);
    const { data, content } = matter(fileContent);

    // Compute word count & reading time
    const words = content.trim().split(/\s+/).length;
    const wordsPerMinute = 200;
    const readingMinutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    const readingTime = `${readingMinutes} min read`;

    // Extract first paragraph as excerpt
    const excerpt = content
      .split("\n")
      .find((line) => line.trim().length > 0 && !line.startsWith("#"))
      ?.substring(0, 180);

    // Enrich metadata (remove any casts)
    const front = data as Partial<ContentMetadata>;
    const enriched: ContentMetadata = {
      ...(front as ContentMetadata),
      author: front.author || "Chinmaya Sahu",
      wordCount: words,
      readingTime,
      updated: front.updated || stats.mtime.toISOString().split("T")[0],
    };

    return {
      slug,
      metadata: enriched,
      excerpt,
    };
  });

  // Sort by date (newest first)
  items.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });

  return items;
}

/**
 * Calculate estimated read time based on content
 */
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
