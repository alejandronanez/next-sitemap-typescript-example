import { fetchAllPosts } from "../api";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

function BlogEntry({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {blogPosts.map((blogPost) => (
        <div key={blogPost.id}>
          <Link href={`/blog/${blogPost.id}`}>
            <a>
              Post # {blogPost.id} - {blogPost.title}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const blogPosts = await fetchAllPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export default BlogEntry;
