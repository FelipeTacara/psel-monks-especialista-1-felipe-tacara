import styled from "styled-components";

interface TagProps {
  text: string;
}

const TagWrapper = styled.div`
  padding: 8px 24px;
  border: 1px solid #7d26c9;
  border-radius: 32px;
  width: fit-content;
  background: #dfdcd5;
  backdrop-filter: blur(16px);

  @media (min-width: 1024px) {
    padding: 8px 40px;
  }
`;

const Text = styled.p`
  color: #7d26c9;
  font-family: HelveticaNeue;
  font-weight: 400;
  font-style: Medium;
  font-size: 16px;
  /* leading-trim: NONE; */
  line-height: 24px;
  letter-spacing: 0%;

  @media (min-width: 1024px) {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 20px;
    line-height: 30px;
  }
`;

const Tag = ({ text }: TagProps) => {
  return (
    <TagWrapper>
      <Text>{text}</Text>
    </TagWrapper>
  );
};

export default Tag;
