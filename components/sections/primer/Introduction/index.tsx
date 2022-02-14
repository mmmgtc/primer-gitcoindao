/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Community,
  AstronautsAndMachine,
  HandsAndEth,
} from "./styles";

const threshold = [0.1];

const Introduction = ({ onChange }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Container>
        <Section1>
          <Community src="/images/primer/section-2-community.svg"/>
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                margin-bottom: 0;
              },
            `}>
            <h3 className="primer__heading">
              {t("page-primer-contents-intro-h3")}
            </h3>
            <p>{t("page-primer-contents-intro-text-one")}</p>
          </div>
        </Section1>
        <Section2>
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                min-width: 340px;
                margin-right: 120px;
                margin-bottom: 0;
              },
            `}>
            <p>{t("page-primer-contents-intro-text-two")}</p>
          </div>
          <AstronautsAndMachine src="/images/primer/section-3-astronauts-and-machine.svg" />
        </Section2>
        <Section3>
          <HandsAndEth src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1644272760/hands_550_htykin.gif" />
          <div
            css={css`
              @media (min-width: 1024px) {
                margin-top: 0;
                max-width: 330px;
                margin-right: 20px;
                margin-bottom: 0;
              },
            `}>
            <p>{t("page-primer-contents-intro-text-three")}</p>
          </div>
        </Section3>
      </Container>
    </div>
  );
};

export default Introduction;
