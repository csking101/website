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

export default async function NotePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params; // ✅ unwrap params

  const notesDir = path.join(process.cwd(), "content/notes");
  const filePath = path.join(notesDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content } = matter(fileContent);

  const htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeToc, { headings: ["h2", "h3"], cssClasses: { toc: "toc" }})
    .use(rehypeStringify)
    .process(content);

  return (
    <div className="mx-auto max-w-3xl py-12 prose dark:prose-invert">
      <article dangerouslySetInnerHTML={{ __html: String(htmlContent) }} />
    </div>
  );
}
