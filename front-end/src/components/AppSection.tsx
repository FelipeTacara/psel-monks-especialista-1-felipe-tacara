import styled from "styled-components";
import { useGraphQL } from "../context/GraphQLContext";

const Wrapper = styled.section`
  padding: 32px 24px;
  background: #eae8e4;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 32px 80px 64px 80px;
  }
`;

const Banner = styled.div`
  background: #3c0c60;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 40px;
    column-gap: 40px;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Title = styled.h2`
  font-family: HelveticaNeue;
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2%;
  color: #eae8e4;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2%;
  color: #eae8e4;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media (min-width: 1024px) {
    width: 217px;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  object-fit: cover;
  width: 100% !important;
  height: auto;
`;

const AppSection = () => {
  const { appSections, loading } = useGraphQL();
  return (
    <Wrapper>
      {appSections.map((section) => (
        <Banner key={section.id}>
          <TextWrapper>
            <Title>{section.title}</Title>
            <Subtitle>{section.text}</Subtitle>
          </TextWrapper>
          <ButtonWrapper>
            <Image src="apple-button.png" alt="Botão apple store" />
            <Image src="google-button.png" alt="Botão google store" />
          </ButtonWrapper>
        </Banner>
      ))}
    </Wrapper>
  );
};

export default AppSection;
