import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeStringify from "rehype-stringify";
import ContentDisplay from "@/components/content-display";

export default async function TripPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const travelDir = path.join(process.cwd(), "content/travel");
  const filePath = path.join(travelDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  // Enrichment (word count, read time, updated timestamp, typed frontmatter)
  const words = content.trim().split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(words / 200))} min read`;
  const fileUpdated = fs.statSync(filePath).mtime.toISOString().split("T")[0];
  const frontmatter = data as { author?: string; updated?: string; [key: string]: unknown };

  const htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeToc, { headings: ["h2", "h3"] })
    .use(rehypeStringify)
    .process(content);

  return (
    <ContentDisplay
      htmlContent={String(htmlContent)}
      metadata={{
        ...frontmatter,
        author: frontmatter.author || "Author",
        readingTime,
        wordCount: words,
        updated: frontmatter.updated || fileUpdated,
      }}
      type="travel"
      backLink={{ href: "/travel", label: "Back to Travel" }}
      slug={slug}
    />
  );
}
