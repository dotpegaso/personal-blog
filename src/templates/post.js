import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { SEO } from "../components";

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
const Post = ({ data: { mdx } }) => (
  <>
    <SEO
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.description}
      image=""
      imageAlt={mdx.frontmatter.imageAlt}
    />
    <div className="blogpost">
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
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
      }
      body
    }
  }
`;
