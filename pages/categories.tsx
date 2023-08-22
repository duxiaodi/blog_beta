import Head from "next/head";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import Link from "next/link";

type Props = {
  collections: {
    [key: string]: Post[];
  };
};

export default function Index({ collections }: Props) {
  const categories = Object.keys(collections);
  return (
    <>
      <Layout>
        <Head>
          <title>little forest | category</title>
        </Head>
        <div className="columns-1 md:columns-3 gap-x-6 px-4 pt-2 md:pt-20 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="py-5 px-6 mb-6">
              <h2 className="text-18 font-500 mb-3 mt-0 leading-snug">
                {category}
              </h2>
              <ul className="sub-text text-14 leading-6">
                {collections[category].map((post) => (
                  <li key={post.title}>
                    <Link
                      as={`/posts/${post.slug}`}
                      href="/posts/[slug]"
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "categories"]);
  const collections = {};
  allPosts.forEach((post) => {
    const category = post.categories;
    collections[category]
      ? collections[category].push(post)
      : ((collections[category] = []), collections[category].push(post));
  });
  return {
    props: { collections },
  };
};
