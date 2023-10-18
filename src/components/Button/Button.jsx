import { ButtonWrapper, LoadMoreButton } from './Button.styled';

export const LoadMoreBtn = ({ action }) => {
  return (
    <ButtonWrapper>
      <LoadMoreButton onClick={action}>Load more</LoadMoreButton>
    </ButtonWrapper>
  );
};
