import React from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import SEO from "../components/SEO";
import PostContent from "../components/PostContent";

deckDeckGoHighlightElement();

const Post = ({ data: { mdx } }) => (
  <>
    <SEO
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.spoiler}
      image={mdx.frontmatter.featuredImage.publicURL}
      imageAlt={mdx.frontmatter.imageAlt}
    />
    <PostContent
      title={mdx.frontmatter.title}
      author={mdx.frontmatter.author}
      date={mdx.frontmatter.date}
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
        date
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