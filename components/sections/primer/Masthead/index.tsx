import { Root, Container, Body, Heading, Subheading, Arrow } from "./styles";

const Masthead = ({ title, mainTitle }) => {
  return (
    <Root>
      <Container>
        <Body>
          <Subheading>{title}</Subheading>
          <Heading className="primer-main-title" >{mainTitle}</Heading>
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
