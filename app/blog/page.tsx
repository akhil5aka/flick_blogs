import Image from "next/image";
import styles from "../../page.module.css";
import { loadhomepage, loadposts } from "../api/savepost/api_serivice";
import dotenv from "dotenv";
import Link from "next/link";
import { Post, PostResponse } from "../../hometypes";

dotenv.config();

// Types for API responses
interface HomePageData {
  data: {
    attributes: {
      title: string;
    };
  };
}

// Since this is a Server Component, it supports async directly.
export default async function Home() {
  try {
    // Fetch data from the API
    const homepagedata: HomePageData | null = await loadhomepage();
    const postsdata: PostResponse | null = await loadposts();

    return (
      <main className={styles.main}>
        {/* Homepage Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>
            {homepagedata?.data?.attributes?.title || "Flick Network"}
          </h1>
          <p className={styles.subtitle}>Welcome to our blog!</p>
        </header>

        {/* Display blog posts */}
        <section className={styles.postsSection}>
          <h2 className={styles.sectionTitle}>Blog Posts</h2>
          {postsdata?.data?.length ? (
            <div className={styles.gridContainer}>
              {postsdata.data.map((post: Post) => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.postImageWrapper}>
                    <Image
                      src={
                        post.image?.formats?.thumbnail?.url
                          ? `${process.env.STRAPI_API}${post.image.formats.thumbnail.url}`
                          : "/placeholder-image.jpg" // Use thumbnail image or fallback to a placeholder
                      }
                      alt={post.title}
                      width={500}
                      height={300}
                      className={styles.postImage}
                    />
                  </div>
                  <div className={styles.postContent}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postDescription}>
                      {post.short_description}
                    </p>

                    {/* Post metadata */}
                    <div className={styles.postMeta}>
                      <p className={styles.postDate}>
                        <strong>Published:</strong>{" "}
                        {new Date(post.publishedAt).toLocaleString()}
                      </p>
                      <p className={styles.postSlug}>
                        <strong>Slug:</strong> {post.slug}
                      </p>
                    </div>

                    <div>
                      <Link href={`/blog/${post.slug}`}>Continue reading</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No blog posts found.</p>
          )}
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching homepage or posts data:", error);
    return <div>Error loading content. Please try again later.</div>;
  }
}

// Static Params Generation
export async function generateStaticParams() {
  try {
    const postPaths: PostResponse = await loadposts();

    // Ensure postPaths is an array and contains valid data
    if (!Array.isArray(postPaths) || postPaths.length === 0) {
      console.warn("No posts found or invalid data structure.");
      return []; // Return an empty array if no valid posts are found
    }

    // Map and return valid slugs
    return postPaths
      .filter((post) => typeof post.slug === "string")
      .map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return an empty array to avoid build failure
  }
}

// Revalidate interval (in seconds)
export const revalidate = 5;
