import { useState } from "react";
import { Box } from "theme-ui";
import { Element } from "react-scroll";
import PageLayout from "components/layouts/primer";
import { HeadProps } from "components/primitives/head";
import Masthead from "components/sections/primer/Masthead";
import Introduction from "components/sections/primer/Introduction";
import Chapter1 from "components/sections/primer/Chapter1";
import Chapter2 from "components/sections/primer/Chapter2";
import Chapter3 from "components/sections/primer/Chapter3";
import Chapter4 from "components/sections/primer/Chapter4";
import Chapter5 from "components/sections/primer/Chapter5";
import Footer from "components/sections/primer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Primer = ({ data }) => {
  const { t } = useTranslation(["primer"]);
  const { locale } = useRouter();
  const [section, setActiveSection] = useState("introduction");
  const onChange = (section) => {
    setActiveSection(section);
  };

  const headProps: HeadProps = {
    meta: {
      title: t("page-primer-meta-title"),
      description: t("page-primer-meta-description"),
      url: "https://gitcoin.co",
      siteName: "Gitcoin Primer",
      image:
        "https://github.com/sujantkumarkv/primer-gitcoindao/blob/main/public/images/primer/gitcoin-meta-poster.svg",
      twitterUsername: "@GitcoinDAO",
    },
  };

  return (
    <PageLayout
      navProps={{ background: "translucent", isInmersive: true }}
      headProps={headProps}
    >
      <Box className="primer" sx={{}}>
        <Box className={`bg ${section}`} />
        <Element name="top" />
        <Box id="containerElement" style={{ position: "relative", zIndex: 10 }}>
          <Masthead
            title={t("page-primer-title")}
            mainTitle={t("page-primer-main-title")}
          />

          <Element name="introduction">
            <Introduction onChange={() => onChange("introduction")} />
          </Element>

          <Element name="chapter1">
            <Chapter1 onChange={() => onChange("chapter1")} />
          </Element>

          <Element name="chapter2">
            <Chapter2 onChange={() => onChange("chapter2")} />
          </Element>

          <Element name="chapter3">
            <Chapter3 onChange={() => onChange("chapter3")} />
          </Element>

          <Element name="chapter4">
            <Chapter4 data={data} />
          </Element>

          <Element name="Chapter5">
            <Chapter5 data={data} onChange={() => onChange("Chapter5")} />
          </Element>

          <Footer />
        </Box>
      </Box>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["primer"])), //earlier was "common" & "home" too since we had .json files for them too but we need only "primer"
      locale,
      data: {},
    },
    revalidate: 1,
  };
}

export default Primer;
