import styled from "styled-components";
import ProductCard from "./ui/ProductCard";

const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 32px 24px;
  width: 100%;
  background: #eae8e4;

  @media (min-width: 1024px) {
    padding: 64px 80px 32px 80px;
    row-gap: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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

const Text = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 100%;
  letter-spacing: 2%;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    flex-shrink: 1;
    flex-direction: row;
    column-gap: 24px;
  }
`;

const cards = [
  {
    imageUrl: "product-image.png",
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    imageUrl: "product-image.png",
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    imageUrl: "product-image.png",
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    imageUrl: "product-image.png",
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const Products = () => {
  return (
    <ProductsSection>
      <TextWrapper>
        <Title>Lorem ipsum dolor sit amet consectetur</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo
        </Text>
      </TextWrapper>
      <ProductsWrapper>
        {cards.map((card) => (
          <ProductCard {...card} />
        ))}
      </ProductsWrapper>
    </ProductsSection>
  );
};

export default Products;
