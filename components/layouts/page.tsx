import Head, { HeadProps } from "components/primitives/head";
import Nav, { NavProps } from "components/sections/nav";
import { Box, SxStyleProp } from "theme-ui";
//import Footer, { FooterProps } from "components/sections/footer";
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
      {...(navProps ? navProps : { background: isDark ? "black" : "white" })}
    />
    <Box
      as="main"
      sx={{ position: "relative", overflow: "hidden", ...pushContentSx }}>
      {children}
    </Box>

  </>
);

export default PageLayout;
