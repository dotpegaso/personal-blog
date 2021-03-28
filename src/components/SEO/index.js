import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, imageAlt, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            twitter
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const imageUrl = `${site.siteMetadata.siteUrl}${image}`;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ]}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: "website" },
        { property: `twitter:title`, content: title },
        { property: `twitter:description`, content: metaDescription },
        {
          property: `twitter:creater`,
          content: site.siteMetadata.twitter || ``,
        },
        { property: `twitter:card`, content: "summary" },
      ]
        .concat(
          image
            ? [
                { name: "og:image", content: imageUrl },
                { name: "og:image:alt", content: imageAlt || title },
                { name: "twitter:image", content: imageUrl },
                { name: "twitter:image:alt", content: imageAlt || title },
                { property: `twitter:card`, content: "summary_large_image" },
              ]
            : [{ property: `twitter:card`, content: "summary" }]
        )
        .concat(meta)}
    />
  );
};

export default SEO;
