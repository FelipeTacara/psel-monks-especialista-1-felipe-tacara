import styled from "styled-components";
import Card from "./ui/Card";
import { useGraphQL } from "../context/GraphQLContext";

const Wrapper = styled.section`
  background-color: #eae8e4;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 32px 80px 64px 80px;
  }
`;

const CardSection = () => {
  const { cards, loading } = useGraphQL();

  return (
    <Wrapper>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Wrapper>
  );
};

export default CardSection;
