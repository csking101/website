import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ FIXED

  const travelDir = path.join(process.cwd(), "content/travel");
  const filePath = path.join(travelDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkSlug)
    .use(remarkToc, { heading: "Contents" })
    .use(html)
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>

      <div className="text-gray-500 text-sm mb-8 flex items-center gap-4">
        <time dateTime={data.date}>
          {new Date(data.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span>•</span>
        <span>{data.days}</span>
        {data.location && (
          <>
            <span>•</span>
            <span>{data.location}</span>
          </>
        )}
      </div>

      {data.tags && (
        <div className="flex flex-wrap gap-2 mb-10">
          {data.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose prose-neutral max-w-none prose-headings:scroll-mt-20"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
