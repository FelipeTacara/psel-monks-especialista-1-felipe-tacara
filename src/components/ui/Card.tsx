import styled from "styled-components";

interface CardProps {
  text: string;
  title: string;
  link: string;
  linkText: string;
}

const CardElement = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid #dfbbfe;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Title = styled.h2`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Medium;
  font-size: 20px;
  /* leading-trim: NONE; */
  line-height: 30px;
  letter-spacing: 0%;
  color: #2d2d2d;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Text = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Light;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 24px;
  letter-spacing: 0%;
  color: #2d2d2d;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const ButtonElement = styled.a`
  background-color: #dfbbfe;
  padding: 8px 40px;
  border-radius: 4px;
  width: fit-content;
  margin: auto;
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: none;
  color: #2d2d2d;
`;

const Card = ({ text, title, link, linkText }: CardProps) => {
  return (
    <CardElement>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <ButtonElement href={link}>{linkText}</ButtonElement>
    </CardElement>
  );
};

export default Card;
