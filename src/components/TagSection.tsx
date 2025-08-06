import styled from "styled-components";
import Tag from "./ui/Tag";

const tags = [
  "Perfumaria",
  "Corpo e banho",
  "Hidratante",
  "Desodorante",
  "Cabelos",
  "Maquiagem",
  "Rosto",
  "Casa",
  "Infantil",
  "Shampoo",
  "Sabonete",
  "Body splash",
  "Óleo corporal",
  "Corretivo",
  "Proteção solar",
];

const Wrapper = styled.section`
  background: #eae8e4;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 32px 24px;

  @media (min-width: 1024px) {
    padding: 32px 80px;
    row-gap: 40px;
  }
`;

const Title = styled.h2`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Medium;
  font-size: 24px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2%;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 16px;
  column-gap: 16px;

  @media (min-width: 1024px) {
    row-gap: 24px;
    column-gap: 24px;
  }
`;

const TagSection = () => {
  return (
    <Wrapper>
      <Title>Lorem ipsum dolor sit amet consectetur</Title>
      <TagWrapper>
        {tags.map((text, index) => (
          <Tag key={index} text={text} />
        ))}
      </TagWrapper>
    </Wrapper>
  );
};

export default TagSection;
