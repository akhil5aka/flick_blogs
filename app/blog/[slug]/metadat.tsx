import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.excerpt || "Read this blog post!",
  };
}
