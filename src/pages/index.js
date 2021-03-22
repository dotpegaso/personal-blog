import React from "react";
import { Link, graphql } from "gatsby";

import { Layout, SEO } from "../components";

const Home = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <SEO title="Home Page" />
      {posts.map((post) => (
        <Link to={post.slug} key={post.slug}>
          <h2>{post.frontmatter.title}</h2>
        </Link>
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

export default Home;
