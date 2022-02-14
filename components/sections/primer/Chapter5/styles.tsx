import styled from "@emotion/styled";
import { Flex } from "theme-ui";

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    margin: "0 auto 160px",
  },
});

export const Title = styled.h2({
  transform: "rotate(-3deg)",
  fontSize: "60px",
  textAlign: "center",
  lineHeight: "60px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: 120,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const FooterHeading = styled.h2({
  fontSize: "40px",
  textAlign: "center",
  lineHeight: "60px",
  marginBottom: 20,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 80,
  },
});

export const SocialIcons= styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: 0,
})

export const Rocket = styled.img({
  marginBottom: 40,
  width: "auto",
  height: "auto",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    height: "auto",
    marginBottom: 50,
  },
});

export const GitcoinCommunity = styled.img({
  href: "https://gitcoin.com",
  marginBottom: 40,
  width: "100%",
  height: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 40,
    href: "https://gitcoin.com",
  },
});

export const List = styled.div({
  display: "grid",
  gridTemplateColumns: "100%",
  ["@media (min-width: 1024px)"]: {
    gridTemplateColumns: "25% 25% 25% 25%",
    margin: "0 -24px",
  },
});

export const Item = styled.div({
  margin: "0 0 70px",
  textAlign: "center",
  ["@media (min-width: 1024px)"]: {
    textAlign: "left",
    paddingRight: "24px",
    margin: "0 24px",
  },
});


export const Icon = styled.img({
  width: "100%",
  height: "100%",
  margin: 0,
});

export const Text = styled.h3({
  fontSize: "28px",
  lineHeight: "38px",
  margin: 0,
});


export const Button = styled.a({
  display: "inline-block",
  background: "#C9B8FF",
  border: "2px solid #000000",
  borderRadius: "3px",
  textAlign: "center",
  padding: "6px 24px",
  textTransform: "uppercase",
  color: "#000000",
  marginTop: 32,
  textDecoration: "none",
  transition: "background .3s",
  "&:hover": {
    background: "#C3FDEE",
    transition: "background .3s",
  },
});
