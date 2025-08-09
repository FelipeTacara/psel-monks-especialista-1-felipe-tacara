import styled from "styled-components";

interface ProductCardProps {
  imgUrl: string;
  title: string;
  text: string;
}

const Card = styled.div`
  display: flex;
  flex: 1 1 200px;
  flex-direction: column;
  row-gap: 8px;
  background: #fcfcfd;
  padding: 6px 6px 16px 6px;
  border-radius: 8px;
  min-width: 0;
`;

const Image = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ProductCard = ({ imgUrl, title, text }: ProductCardProps) => {
  return (
    <Card>
      <Image src={imgUrl} alt="product image" />
      <TextWrapper>
        <h3>{title}</h3>
        <p>{text}</p>
      </TextWrapper>
    </Card>
  );
};

export default ProductCard;
