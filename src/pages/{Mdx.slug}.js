import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, SEO } from "../components";

const BlogPostPage = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <article>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image=""
          imageAlt={post.frontmatter.imageAlt}
        />
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostPageId($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default BlogPostPage;
