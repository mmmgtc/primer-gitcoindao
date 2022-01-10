import { Root, Container, Body, Heading, Subheading, Arrow } from "./styles";

const Masthead = ({ title }) => {
  return (
    <Root>
      <Container>
        <Body>
          <Subheading>{title}</Subheading>
          <Heading>
            <img
              src="/images/primer/section-1-gitcoin-community.svg"
              width="1200"
              height="700"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: 550,
                color: "#FFA3A3",
                minWidth: "100%",
                
              }}
            />
          </Heading>
        </Body>
        <Arrow>
          <svg viewBox="0 0 22 14">
            <polyline
              fill="none"
              points="1,2 11,12 21,2"
              stroke="black"
              strokeMiterlimit="10"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </Arrow>
      </Container>
    </Root>
  );
};

export default Masthead;
