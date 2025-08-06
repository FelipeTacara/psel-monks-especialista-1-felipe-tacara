import styled from "styled-components";

const Container = styled.div`
  background: #eae8e4;
`;

const HeroContainer = styled.main`
  position: relative;
  width: 100%;
  height: fit-content;
  background: #2d2d2d;
  z-index: 10;

  @media (min-width: 1024px) {
    border-radius: 0 0 32px 32px;
  }
`;

const HeroBox = styled.div`
  @media (min-width: 1024px) {
    padding: 24px 0 24px 80px;
  }
`;

const Navigation = styled.nav`
  width: 236px;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  position: sticky;
  top: 0;
  left: 0;
  background: #2d2d2d;

  @media (min-width: 1024px) {
    padding: 24px 0 0 0;
  }
`;

const Logo = styled.img`
  @media (min-width: 1024px) {
    width: 140px;
    height: 24px;
  }
`;

const Hamburguer = styled.img`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 460/724;

  @media (min-width: 1024px) {
    border-radius: 0 0 32px 0;
    width: 506px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  row-gap: 8px;
  width: 236px;
  flex-direction: column;
  padding: 16px 24px 24px 24px;
  z-index: 0;

  @media (min-width: 1024px) {
    width: 700px;
    padding: 60px 0 0 0;
  }
`;

const Title = styled.h1`
  font-family: HelveticaNeue;
  font-weight: 700;
  font-style: Heavy;
  font-size: 24px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2px;
  color: #eae8e4;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Text = styled.p`
  font-family: HelveticaNeue;
  font-weight: 200;
  font-style: Thin;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2px;
  color: #eae8e4;

  @media (min-width: 1024px) {
    font-size: 24px;
    padding-bottom: 45px;
  }
`;

const ScrollImage = styled.img`
  width: 38px;
  height: 51.43px;
  margin-top: 16px;
  margin-inline: auto;
  @media (min-width: 1024px) {
    width: 72px;
    height: 100px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroBox>
          <Navigation>
            <Logo src="logo-monks.svg" />
            <Hamburguer src="hamburger.svg" />
          </Navigation>
          <Wrapper>
            <Title>Lorem ipsum dolor sit amet consectetur</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo aenean viverra
            </Text>
            <ScrollImage src="scroll.svg" alt="Scroll" />
          </Wrapper>
        </HeroBox>
        <Image src="image.svg" alt="Background" />
      </HeroContainer>
    </Container>
  );
};

export default Hero;
