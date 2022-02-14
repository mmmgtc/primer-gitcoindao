import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "60px auto 80px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "100px auto 200px",
  },
});

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 80,
  },
});

export const Community = styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    marginRight: 120,
  },
});

export const Section2 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 0,
  },
});

export const AstronautsAndMachine= styled.img({
  width: "100%",
  marginBottom: 40,
  marginLeft: -40,
  ["@media (min-width: 768px)"]: {
    width: "auto",
  },
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 0,
  },

})


export const HandsAndEth = styled.img({
  width: "auto",
  height: "auto",
  marginBottom: 40,
  ["@media (min-width: 768px)"]: {
    width: "auto",
  },
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 0,
  },
});

export const Section3 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  marginBottom: 40,
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 200,
  },
});



export const GitcoinAndPlanets = styled.img({
  width: "100%",
  marginBottom: 11,
  ["@media (min-width: 1024px)"]: {
    position: "relative",
    marginBottom: 0,
    marginLeft: "-250px",
    marginRight: "11px",
  },
});

export const Text = styled.div({});
