import { fetchIndividualPost } from "../../api";
import { GetStaticPaths, InferGetStaticPropsType } from "next";

function BlogEntry({
  id,
  title,
  body,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>
        {id}: {title}
      </h1>
      <p>{body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

// @ts-ignore: ignoring params error for demo purposes
export const getStaticProps = async ({ params }) => {
  const blogPost = await fetchIndividualPost(params.slug);

  return {
    props: {
      id: blogPost.id,
      title: blogPost.title,
      body: blogPost.body,
    },
  };
};

export default BlogEntry;
