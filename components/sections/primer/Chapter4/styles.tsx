import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  overflow: "hidden",
  ["@media (min-width: 1024px)"]: {
    overflow: "initial",
    padding: 0,
    margin: "0 auto 160px",
  },
});

export const Title = styled.h2({
  transform: "rotate(3deg)",
  fontSize: "60px",
  textAlign: "center",
  lineHeight: "60px",
  fontWeight: 100,
  position: "relative",
  textTransform: "uppercase",
  marginBottom: 80,
  ["@media (min-width: 1024px)"]: {
    marginBottom: 80,

  },
});

export const Text = styled.div({
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "400px",
    marginBottom: 0,
    marginRight: 40,
  },
});

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    marginBottom: 40,
    flexDirection: "row",
  },
});

export const Section2 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: "40px",
  },
});

export const Section3 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 0,
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: "-80px",
  },
});

export const AstronautAndRobot = styled.img({
  width: "100%",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 0,
  },
});

export const AstronautStanding = styled.img({
  width: "100%",
  marginBottom: 40,
  marginRight: -40,
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 0,
    marginRight: 40,
  },
});

export const AstronautsMeteorLamp = styled.img({
  width: "100%",
  marginBottom: -40,
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: -40,
  },
});
