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
          color: "hsl(193 59% 60%)",
        },
      ]}
      meta={[
        { property: `author`, content: "dotpegaso" },
        { property: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: "article" },
        { property: `twitter:title`, content: title },
        { property: `twitter:description`, content: metaDescription },
        {
          property: `twitter:creator`,
          content: site.siteMetadata.twitter || `dotpegaso`,
        },
        { property: `twitter:card`, content: "summary" },
      ]
        .concat(
          image
            ? [
                { property: "og:image", content: image },
                { property: "og:image:alt", content: imageAlt || title },
                { property: "twitter:image", content: image },
                { property: "twitter:image:alt", content: imageAlt || title },
                { property: `twitter:card`, content: "summary_large_image" },
              ]
            : [{ property: `twitter:card`, content: "summary" }]
        )
        .concat(meta)}
    />
  );
};

export default SEO;
