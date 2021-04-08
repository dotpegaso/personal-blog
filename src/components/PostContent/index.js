import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import { humanDate } from "../../utils";
import { LayoutContext } from "../Layout";
import Timestamp from "../Timestamp";
import SubscribeForm from "../SubscribeForm";

import * as S from "./styles";

const PostContent = ({ title, body, author, date }) => {
  const { locale } = useContext(LayoutContext);

  deckDeckGoHighlightElement();

  return (
    <S.Container>
      <MDXProvider
        components={{
          a: (props) => <S.Anchor target="_blank" {...props} />,
          p: (props) => <S.Paragraph {...props} />,
          inlineCode: (props) => <S.ShortCode {...props} />,
          strong: (props) => <S.Strong {...props} />,
          blockquote: (props) => <S.Blockquote {...props} />,
          em: (props) => <S.Emphasis {...props} />,
          ol: (props) => <S.OrdernedList {...props} />,
          ul: (props) => <S.UnorderedList {...props} />,
          li: (props) => <S.ListItem {...props} />,
          h2: (props) => <S.Header2 {...props} />,
        }}
      >
        <Timestamp dateTime={date}>{`${humanDate({
          date,
          locale,
        })} - ${author}`}</Timestamp>
        <S.Title>{title}</S.Title>
        <S.Body>
          <MDXRenderer>{body}</MDXRenderer>
        </S.Body>
      </MDXProvider>
      <SubscribeForm />
    </S.Container>
  );
};
PostContent.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostContent;
