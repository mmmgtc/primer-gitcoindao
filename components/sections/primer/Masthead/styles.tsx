import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

export const Root = styled.div({
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  backgroundPosition: "100% 80%",
  ["@media (min-width: 1124px)"]: {
    backgroundImage: "url(/images/primer/section-1-spaceships.svg)",
  },
});

export const Container = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "200px 24px",
  position: "relative",
  ["@media (min-width: 1024px)"]: {
    margin: "0 auto",
    justifyContent: "center",
    height: "calc(100vh - 116px )",
    padding: 0,
  },
});

export const Body = styled.div({
  alignSelf: "flex-start",
  margin: "0 auto",
});

export const Heading = styled.h1({
  transform: "rotate(-4deg)",
  textAlign: "center",
  fontsize: "1500px",
  lineHeight: "100px",
  fontweight: 200,
  textTransform: "uppercase", 
  fontFamily: "Miriam Libre, sans-serif",
  marginRight: "-40px",
 
});

export const Subheading = styled.h2({
  transform: "rotate(0deg)",
  textAlign: "center",
  transformOrigin: "50% 50%",
  fontSize: "18px",
  lineHeight: "30px",
  fontWeight: 100,
  marginBottom: 16,
  textTransform: "uppercase",
  fontFamily: "Miriam Libre, sans-serif",
});

const scrollPrompt = keyframes`
  0%, 100%, 70% {
    transform: translate3d(-50%,0,0)}
  80% {
    transform: translate3d(-50%,-120%,0)
  }
  85% {
    transform: translate3d(-50%,160%,0)
  }
`;

const scrollPromptRule = css`
  ${scrollPrompt} 4s linear infinite;
`;

export const Arrow = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 30px;
  width: 40px;
  height: 20px;
  left: 50%;
  animation: ${scrollPromptRule};
  transform: translate3d(-50%, 0, 0);
  @media (min-width: 1024px) {
    bottom: 72px;
  }
`;
