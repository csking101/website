import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import Link from "next/link";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export default async function NotePage(props: NotePageProps) {
  const { slug } = await props.params; // ✅ FIX: await params

  const notesDir = path.join(process.cwd(), "content/notes");
  const filePath = path.join(notesDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkSlug)
    .use(remarkToc, { heading: "Table of Contents" })
    .use(html)
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto py-12 mt-12">
      <Link href="/notes" className="text-sm text-gray-400 hover:text-gray-200">
        ← Back to Notes
      </Link>

      <h1 className="text-3xl font-bold mt-4">{data.title}</h1>
      <p className="text-gray-400 text-sm mt-1">{data.date}</p>

      <article
        className="prose prose-invert mt-8"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
