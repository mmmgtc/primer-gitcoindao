/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Root, Container, Section, Title, Text } from "./styles";

const threshold = [0.1];

const Chapter2 = ({ onChange }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Root ref={ref}>
      <Container>
        <Title>{t("page-primer-contents-token")}</Title>

        <Section>
            <Text>
              <p>{t("page-primer-contents-token-text-one")}</p>
              <p>{t("page-primer-contents-token-text-two")}</p> 
            </Text>      
          
        </Section>
        
      </Container>
    </Root>
  );
};

export default Chapter2;
