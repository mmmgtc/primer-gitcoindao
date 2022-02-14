import Head, { HeadProps } from "components/primitives/head";
import Nav, { NavProps } from "components/sections/nav";
import { Box, SxStyleProp } from "theme-ui";
import { FC } from "react";

type Props = {
  headProps?: HeadProps;
  isDark?: boolean;
  navProps?: NavProps;
  pushContentSx?: SxStyleProp;
};

const PageLayout: FC<Props> = ({
  children,
  headProps,
  isDark,
  navProps,
  pushContentSx,
}) => (
  <>
    <Head {...headProps} />
    <Nav
      isPrimer
      {...(navProps ? navProps : { background: isDark ? "black" : "white" })}
    />
    <Box
      as="main"
      sx={{ position: "relative", overflow: "hidden", ...pushContentSx }}>
      {children}
    </Box>
    <style global jsx>{`
      @font-face {
        font-family: 'Miriam Libre', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap');
        font-weight: 100;
        font-style: normal;
      }

      @font-face {
        font-family: 'Miriam Libre', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Miriam Libre', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap');
        font-weight: normal;
        font-style: normal;
      }

      .primer {
        font-family: 'Miriam Libre', sans-serif;
        font-size: 18px;
        line-height: 28px;
      }

      .primer-main-title {
        font-family: 'Miriam Libre', sans-serif;
        font-size: 90px;
        line-height: 100px;
        margin-left: -40px;
      }
      .primer h1,
      .primer h2,
      .primer h3,
      .primer h4,
      .primer h5,
      .primer h6 {
        font-weight: normal;
        font-family: 'Miriam Libre', sans-serif;
        margin-top: 0;
      }

      .primer h2 {
        font-weight: lighter;
      }

      .primer__heading {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 16px;
      }

      .primer p {
        margin-bottom: 32px;
        margin-top: 0;
      }

      .primer ul {
        margin-bottom: 11px;
        margin-top: 0;
      }

      .primer strong {
        font-size: 16px;
        letter-spacing: 0.8px;
      }

      .primer .bg {
        transition: background-color 0.6s;
        background-color: #97f2ef;
        width: 100vw;
        position: fixed;
        height: 100vh;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
      }
      .primer .introduction {
        background-color: #C9B8FF;
        transition: background-color 0.6s;
      }
      .primer .chapter1 {
        background-color: #FAADBF;
        transition: background-color 0.6s;
      }
      .primer .chapter2 {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }
      .primer .chapter3 {
        background-color: #FAADBF;
        transition: background-color 0.6s;
      }
      .primer .chapter4 {
        background-color: #FAADBF;
        transition: background-color 0.6s;
      }
      .primer .chapter5 {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }

      .social-icons li{
        display: inline-block;
        margin-bottom: 40px;
        padding: 15px;
        vertical-align: middle;
      }
     

    }
    `}</style>
  </>
);

export default PageLayout;
