import Link from "next/link";
import Head from "next/head";
import { Page } from "../components/page";
import { GetStaticProps } from "next";
import { getPosts } from "../lib/posts";
import { IPost } from "../models/i-post";

const Home: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>My Posts</a>
        </Link>
        <div>
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <a>{post.title}</a>
            </Link>
          ))}
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
