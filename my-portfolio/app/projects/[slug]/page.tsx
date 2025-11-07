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

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const projectsDir = path.join(process.cwd(), "content/projects");
  const filePath = path.join(projectsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

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

  const html = String(rendered);

  return (
    <ContentDisplay
      htmlContent={html}
      metadata={data}
      type="project"
      backLink={{ href: "/projects", label: "Back to Projects" }}
      slug={slug}
    />
  );
}
