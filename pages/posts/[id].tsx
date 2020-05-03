import React from "react";
import { Page } from "../../components/page";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { IPost as PostModel } from "../../models/i-post";

const Post: React.FC<{ post: PostModel }> = ({ post }) => (
  <Page>
    {post.title}
    <br />
    {post.date}
    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
  </Page>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const post = await getPostData(id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
