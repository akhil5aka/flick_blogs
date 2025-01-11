import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ display: "grid" }}>
      <h1>blog</h1>
     <h2> <p>Get yourself updated with</p></h2>

      <p>
what is happening around the globe!

Welcome to our blog, where we explore the latest trends, insights, and innovations in the business world. Stay updated and inspired by our expert perspectives and industry news


</p>
      <Link href="/blog" className="text-blue-500">
        Go to Blog
      </Link>
      {/* <Link href="/blog/create" className="text-blue-500">
        Create blog
      </Link> */}
    </div>
  );
}
