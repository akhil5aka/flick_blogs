import Image from "next/image";
import { loadPostBySlug, loadposts } from "../../api/savepost/api_serivice";
import styles from "../../../page.module.css";
import { Post, PostResponse } from "../../../hometypes";


interface Props {
  params: Promise<{ slug: string }>; // Make params a Promise
} 
export default async function PostDetails({ params }: Props) {
  try {
    const { slug } = await params; // Extract slug from params

    // Fetch the post details by slug
    const postDetailsResponse: PostResponse = await loadPostBySlug(slug);

    // Check if postDetails exists and has the necessary structure
    if (!postDetailsResponse?.data?.length) {
      return <div>Post not found or data is incomplete.</div>;
    }

    // Extract the post details from the response
    const post: Post = postDetailsResponse.data[0];

    return (
      <div className={styles.postDetails}>
        <h1 className={styles.postTitle}>{post.title}</h1>

        {/* Image Section */}
        {post.image && (
          <div className={styles.imageContainer}>
            <Image
              src={
                post.image.formats?.thumbnail?.url
                  ? process.env.STRAPI_API + post.image.formats.thumbnail.url
                  : "/placeholder-image.jpg"
              }
              alt={post.title}
              width={600}
              height={400}
              className={styles.postImage_blg}
            />
          </div>
        )}

        {/* Content Section */}
        <div className={styles.postContent}>
          {post.content.map((contentBlock, index) => (
            <p key={index} className={styles.contentText}>
              {contentBlock.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading post details:", error);
    return <div>Error loading post details. Please try again later.</div>;
  }
}

export async function generateStaticParams() {
  try {
    // Fetch posts to generate static paths
    const postPaths: PostResponse = await loadposts();

    if (!postPaths?.data?.length) {
      console.warn("No posts found or invalid data structure.");
      return []; // Return empty array if no valid posts are found
    }

    // Map the post slugs for static paths
    return postPaths.data.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return empty array to avoid build failure
  }
}

export const revalidate = 10;
