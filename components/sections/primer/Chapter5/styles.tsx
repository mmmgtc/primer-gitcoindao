import styled from "@emotion/styled";

export const Root = styled.div({
  backgroundImage: `url('/images/primer/section-14-tokens.svg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "0 0px",
  marginBottom: 80,
  ["@media (min-width: 1024px)"]: {
    marginBottom: 0,
    backgroundSize: "100% 100%",
    backgroundPosition: "top",
  },
});

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 11px",
  padding: "11px 11px 0",
  overflow: "hidden",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    overflow: "initial",
    margin: "0 auto 51px",
  },
});

export const Title = styled.h2({
  transform: "rotate(3deg)",
  fontSize: "35px",
  textAlign: "center",
  lineHeight: "40px",
  fontWeight: 100,
  position: "relative",
  textTransform: "uppercase",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    fontSize: "40px",
    lineHeight: "56px",
    marginBottom: 50,
  },
});

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});
