import React, { useState } from "react";
import axios from "axios";

import { useTranslations } from "../../hooks";

import * as S from "./styles";

const SubscribeForm = () => {
  const [email, setEmail] = useState();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const {
    newsletter_placeholder,
    newsletter_button,
    newsletter_title,
    newsletter_description,
    newsletter_confirmation,
  } = useTranslations();

  function handleSubmit(e) {
    e.preventDefault();

    const data = { email };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(process.env.GATSBY_MAILCHIMP_ENDPOINT, data, config)
      .then(() => setIsSubscribed(true))
      .catch((error) => console.log("subscription error", error));
  }

  return (
    <S.Container>
      <S.Disclaimer>
        <S.Text title>{newsletter_title}</S.Text>
        <S.Text>{newsletter_description}</S.Text>
      </S.Disclaimer>
      <S.Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        isSubscribed={isSubscribed}
      >
        {isSubscribed ? (
          <S.Text title>{newsletter_confirmation} 🎉</S.Text>
        ) : (
          <>
            <S.Input
              placeholder={newsletter_placeholder}
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <S.Submit>{newsletter_button}</S.Submit>
          </>
        )}
      </S.Form>
    </S.Container>
  );
};

SubscribeForm.propTypes = {};

export default SubscribeForm;
