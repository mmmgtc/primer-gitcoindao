/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-scroll";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation(["primer"]);

  return (
    <div
      css={css`
        padding: 40px 24px;
        margin-left: 600px;
        display: right;
        justify-content: space-between;
        align-items: right;
        font-size: 14px;
      `}>
      
      <Link
        style={{
          textDecoration: "none",
          backgroundImage: "none",
          color: "#000000",
        }}
        to="top"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}>
        <div
          css={css`
            display: flex;
            align-items: center;
            cursor: pointer;
          `}>
          {t("page-primer-back")}{" "}
          <img
            style={{ margin: "0 0 0 8px" }}
            src="/images/primer/arrow-up.svg"
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
