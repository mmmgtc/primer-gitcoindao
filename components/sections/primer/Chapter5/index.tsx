/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import {
  Container,
  Section,
  FooterHeading,
  Button,
  Title,
  List,
  Item,
  Icon,
  Rocket,
  SocialIcons,
  GitcoinCommunity,
} from "./styles";
import { useTranslation } from "next-i18next";
import { FiAlignCenter } from "react-icons/fi";

const threshold = [0];

const Chapter5 = ({ onChange, data }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Title>{t("page-primer-contents-involved-h2")}</Title>
      <Section>
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 330px;
              margin-right: 80px;
            }
          `}>
          <p
            dangerouslySetInnerHTML={{
              __html: t("page-primer-contents-involved-text-one", {
                interpolation: { escapeValue: false },

              }),
            }}
          />
        </div>
        <Rocket src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1644277150/rocket_550_jnukch.gif" />
      </Section>

      <Section>
        <List>

          <Item>
            <p style={{ marginBottom: 80 }}>{t("page-primer-contents-involved-build")}</p>
            <Link href="https://gitcoin.co/earn" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>
                {t("page-primer-contents-involved-build-btn")}
              </Button>
            </Link>
          </Item>

          <Item>
            <p style={{ marginBottom: 80 }}>{t("page-primer-contents-involved-discord")}</p>
            <Link href="https://discord.gg/gitcoin" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>{t("page-primer-contents-involved-discord-btn")}
              </Button>
            </Link>
          </Item>

          <Item>
            <p style={{ marginBottom: -5 }}>{t("page-primer-contents-involved-contribute")}</p>
            <Link href="https://gitcoin.com" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>{t("page-primer-contents-involved-contribute-btn")}
              </Button>
            </Link>
          </Item>

          <Item>
            <p style={{ marginBottom: 50}}>{t("page-primer-contents-involved-grants")}</p>
            <Link href="https://gitcoin.co/grants" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>{t("page-primer-contents-involved-grants-btn")}
              </Button>
            </Link>
          </Item> 

        </List>
      </Section>

      <Section>
        <SocialIcons>
          <FooterHeading><p>{t("page-primer-contents-involved-text-two")}</p></FooterHeading>
            <ul className="social-icons">
              <li><a target={"_blank"} href="https://youtube.com/c/GitcoinMedia"><Icon src="/images/primer/icons/youtube.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://twitter.com/GitcoinDAO" ><Icon src="/images/primer/icons/twitter.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://github.com/gitcoinco"><Icon src="/images/primer/icons/github.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://discord.gg/gitcoin"><Icon src="/images/primer/icons/discord.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://form.typeform.com/to/ttNCMt8w?typeform-source=gov.gitcoin.co"><Icon src="/images/primer/icons/mail.svg"></Icon></a></li>
            </ul>        

            <a target={"_blank"} href="https://gitcoin.com">
              <GitcoinCommunity src="/images/primer/section-15-gitcoin-community.svg" />
            </a>
        </SocialIcons>
      </Section>

      </Container>
  );
};

export default Chapter5;
