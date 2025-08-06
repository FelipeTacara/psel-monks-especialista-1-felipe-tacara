import styled from "styled-components";

const Gallery = styled.section`
  background: #eae8e4;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  padding: 32px 24px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    padding: 64px 80px;
    height: 845px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    row-gap: 34px;
    height: 100%;
    min-height: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Medium;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 2%;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2%;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ImageMain = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
  height: 300px;

  @media (min-width: 1024px) {
    height: auto;
    flex: 1;
    min-height: 0;
  }
`;

const SecondaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    row-gap: 24px;
    height: 100%;
    min-height: 0;
  }
`;

const ImageSecondary = styled.img`
  object-fit: cover;
  border-radius: 24px;
  width: 100%;
  height: 200px;

  @media (min-width: 1024px) {
    height: auto;
    flex: 1;
    min-height: 0;
  }
`;

const SimpleGallery = () => {
  return (
    <Gallery>
      <Block>
        <TextWrapper>
          <Title>Lorem ipsum dolor sit amet consectetur</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </Subtitle>
        </TextWrapper>
        <ImageMain src="gallery-image-1.png" alt="Primeira imagem" />
      </Block>
      <SecondaryWrapper>
        <ImageSecondary src="gallery-image-2.png" alt="Segunda imagem" />
        <ImageSecondary src="gallery-image-3.png" alt="Terceira imagem" />
      </SecondaryWrapper>
    </Gallery>
  );
};

export default SimpleGallery;
