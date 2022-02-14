import { useTranslation } from "next-i18next";
import * as React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Title, Text,
          Section1, Section2, Section3, Section4, 
          AstronautsAndSpiral, AstronautsAndSpaceship, AstronautsCircle, ThreeAstronauts} from "./styles";

const threshold = [0.5];

const Chapter1 = ({ onChange }) => {
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
      <Title>{t("page-primer-contents-who")}</Title>

      <Section1>
        <Text>
          <p>{t("page-primer-contents-who-text-one")}</p>
        </Text>
        <AstronautsAndSpiral src="/images/primer/section-5-astronauts-and-spiral.svg" />
      </Section1>

      <Section2>
        <AstronautsAndSpaceship src="/images/primer/section-6-astronauts-and-spaceship.svg" />
        <Text>
          <p>{t("page-primer-contents-who-text-two")}</p>
          <p>{t("page-primer-contents-who-text-three")}</p>
        </Text>
      </Section2>
        
      <Section3>
        <Text>
            <p>{t("page-primer-contents-who-text-four")}</p>
          </Text>
        <AstronautsCircle src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1644251736/table_550_y6x89b.gif" />
      </Section3>

      <Section4>
        <ThreeAstronauts src="/images/primer/section-8-three-astronauts.svg" />
        <Text>
          <p>{t("page-primer-contents-who-text-five")} </p>
        </Text>
      </Section4>

    </Container>
  );
};

export default Chapter1;
