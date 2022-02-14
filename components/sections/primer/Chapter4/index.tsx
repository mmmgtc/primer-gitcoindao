/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Container, Text, Section1, Section2, Section3, Title, 
          AstronautAndRobot, AstronautStanding, AstronautsMeteorLamp } from "./styles";
import { useTranslation } from "next-i18next";

const Chapter4 = ({ data }) => {
  const { t } = useTranslation(["primer"]);

  return (
    <Container>
      <Title>{t("page-primer-contents-mission-h3-one")}</Title>

      <Section1>
        <Text>
          <p>{t("page-primer-contents-mission-text-one")}</p>
        </Text>
        <AstronautAndRobot src="/images/primer/section-11-astronauts-and-robot.svg" />
      </Section1>

      <Section2>
        <AstronautStanding src="/images/primer/section-12-astronaut-standing.svg" />
        <Text>
          <p>{t("page-primer-contents-mission-text-two")}</p>
          <p>{t("page-primer-contents-mission-text-three")}</p>
        </Text>
      </Section2>
      
      <Section3>
        <AstronautsMeteorLamp src="/images/primer/section-13-astronauts-meteor-lamp.svg" />
      </Section3>
    </Container>
  );
};

export default Chapter4;
