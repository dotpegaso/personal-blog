import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import PostContent from "../components/PostContent";

const Post = ({ data: { mdx } }) => (
  <>
    <SEO
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.spoiler}
      image={mdx.frontmatter.featuredImage.publicURL}
      imageAlt={mdx.frontmatter.spoiler}
    />
    <PostContent
      title={mdx.frontmatter.title}
      author={mdx.frontmatter.author}
      body={mdx.body}
    />
  </>
);

export default Post;

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        author
        spoiler
        featuredImage {
          publicURL
        }
      }
      body
    }
  }
`;
