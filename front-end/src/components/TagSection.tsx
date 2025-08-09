import styled from "styled-components";
import Tag from "./ui/Tag";
import { useGraphQL } from "../context/GraphQLContext";

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
  font-weight: 500;
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
  const { tagSections, loading } = useGraphQL();

  return (
    <>
      {tagSections.map((tagSection) => (
        <Wrapper key={tagSection.id}>
          <Title>{tagSection.title}</Title>
          <TagWrapper>
            {tagSection.tags.map((tag, index) => (
              <Tag key={`${index}-${tag}`} text={tag} />
            ))}
          </TagWrapper>
        </Wrapper>
      ))}
    </>
  );
};

export default TagSection;
