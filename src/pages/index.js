import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Preview from "../components/Preview";

import { useTranslations } from "../hooks";

const Home = ({ data }) => {
  const posts = data.allMdx;
  const { home_seo_title } = useTranslations();

  return (
    <>
      <SEO title={home_seo_title} />
      {posts.edges.map(({ node: post }) => (
        <Preview
          key={post.frontmatter.title}
          title={post.frontmatter.title}
          spoiler={post.frontmatter.spoiler}
          path={post.parent.relativeDirectory}
        />
      ))}
    </>
  );
};

export const pageQuery = graphql`
  query Index($locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            spoiler
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
