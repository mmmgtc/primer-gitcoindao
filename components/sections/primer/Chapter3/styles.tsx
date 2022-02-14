import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "0 auto 136px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "0 auto 240px",
    padding: 0,
  },
});


export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});


export const Text = styled.div({
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "550px",
    marginBottom: 20,
  },
});


export const AstronautsBalloons= styled.img({
    width: "100%",
    ["@media (min-width: 1024px)"]: {
      width: "auto",
    },
    
    marginLeft: 40,
    marginRight: 60,
  });
  
