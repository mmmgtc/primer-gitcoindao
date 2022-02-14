import { useTranslation } from "next-i18next";
import * as React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Text, Section, AstronautsBalloons } from "./styles";

const threshold = [0.5];

const Chapter3 = ({ onChange }) => {
  /*it was "common" before indicating to use translations from common.json which I deleted & 
    only primer.json is needed for us. */
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Section>
        <AstronautsBalloons src="/images/primer/section-10-astronauts-balloons.svg" />
        <Text>
            <p>{t("page-primer-contents-token-text-three")}</p>
            
            <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-primer-contents-token-text-four", {
                interpolation: { escapeValue: false },
              }),}} 
            />

            <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-primer-contents-token-text-five", {
                interpolation: { escapeValue: false },
              }),}} 
            />

            <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-primer-contents-token-text-six", {
                interpolation: { escapeValue: false },
              }),}} 
            />            
                        
        </Text>
      </Section>
    </Container>
  );
};

export default Chapter3;
