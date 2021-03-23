import React from "react";
import { graphql } from "gatsby";

import { SEO, LocalizedLink } from "../components";

const Home = ({ data, pageContext }) => {
  const posts = data.allMdx;

  return (
    <>
      <SEO title="Home Page" />
      {posts.edges.map(({ node: post }) => (
        <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
          <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
            {post.frontmatter.title}
          </LocalizedLink>
          <div>{post.frontmatter.date}</div>
        </li>
      ))}
    </>
  );
};

export const pageQuery = graphql`
  query Index($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;

export default Home;
