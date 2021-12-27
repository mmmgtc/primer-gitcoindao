import { useTranslation } from "next-i18next";
import * as React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Section1, Title, Ethereum, Text } from "./styles";

const threshold = [0.5];

const Chapter1 = ({ onChange }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Title>{t("page-primer-contents-what")}</Title>
      <Section1>
        <Text>
          <p>{t("page-primer-contents-what-text-one")}</p>
          <p>{t("page-primer-contents-what-text-two")}</p>
        </Text>
        <Ethereum src="/images/primer/section-7-spaceship.svg" />
      </Section1>
    </Container>
  );
};

export default Chapter1;
