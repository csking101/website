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
      metadata={data}
      type="travel"
      backLink={{ href: "/travel", label: "Back to Travel" }}
      slug={slug}
    />
  );
}
