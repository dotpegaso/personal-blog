import { useContext } from "react";
import _ from "lodash";
import { useStaticQuery, graphql } from "gatsby";
import { LocaleContext } from "../components/Layout";

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = useContext(LocaleContext);
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // // Simplify the response from GraphQL
  const simplified = rawData.edges.map((item) => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // // Only return translations for the current locale
  const result = simplified.filter((lang) => lang.name === locale)[0];

  return _.get(result, "translations", []);
};

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            footer
            home
          }
        }
      }
    }
  }
`;
