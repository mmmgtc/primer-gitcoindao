/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Container, Section1, Section2, Section3, Title, Fees } from "./styles";
import Rewards from "../Rewards";
import { useTranslation } from "next-i18next";

const Chapter7 = ({ data }) => {
  const { t } = useTranslation(["primer"]);

  return (
    <Container>
      <Title>{t("page-primer-contents-rewarding")}</Title>
      <Section1>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              max-width: 330px;
              margin-bottom: 0;
              margin-right: 152px;
            }
          `}>
          <p>{t("page-primer-contents-rewarding-text-one")}</p>
        </div>
        <Fees src="/images/primer/section-16-astronaut-rewarded.svg" />
      </Section1>
      <Section2>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              position: relative;
              margin-bottom: -251px;
              margin-left: -101px;
              margin-right: 101px;
              min-width: 700px;
              min-height: 816px;
            }
          `}>
          <Rewards data={data} />
        </div>
        <div>
          <p>{t("page-primer-contents-rewarding-text-two")}</p>
          <p>{t("page-primer-contents-rewarding-text-three")}</p>
          <p>{t("page-primer-contents-rewarding-text-four")}</p>
        </div>
      </Section2>
      <Section3>
        <p
          css={css`
            max-width: 370px;
            textalign: center;
          `}>
          {t("page-primer-contents-rewarding-text-five")}
        </p>
      </Section3>
    </Container>
  );
};

export default Chapter7;
