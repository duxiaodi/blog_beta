import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostAnchor from "../../components/post-anchor";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = `little forest | ${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <article>
            <PostHeader
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
            <Container>
              <div className="flex items-start">
                <PostBody content={post.content} />
                <PostAnchor anchors={post.anchors} />
              </div>
            </Container>
          </article>
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "excerpt",
  ]);
  const contentAndAnchor = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        ...contentAndAnchor,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
