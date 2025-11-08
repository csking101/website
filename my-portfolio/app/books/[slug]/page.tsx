import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import ContentDisplay from "@/components/content-display";

export default async function BookEntry({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const booksDir = path.join(process.cwd(), "content/books");
  const filePath = path.join(booksDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  const words = content.trim().split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(words / 200))} min read`;
  const fileUpdated = fs.statSync(filePath).mtime.toISOString().split("T")[0];
  const frontmatter = data as {
    author?: string;
    updated?: string;
    title?: string;
    date?: string;
    tags?: string[];
    [key: string]: unknown;
  };

  const rendered = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["hover:opacity-60", "transition"] },
    })
    .use(rehypeStringify)
    .process(content);

  return (
    <ContentDisplay
      htmlContent={String(rendered)}
      metadata={{
        ...frontmatter,
        author: frontmatter.author || "Chinmaya Sahu",
        readingTime,
        wordCount: words,
        updated: frontmatter.updated || fileUpdated,
      }}
      type="books"
      backLink={{ href: "/books", label: "Other Books" }}
      slug={slug}
    />
  );
}
