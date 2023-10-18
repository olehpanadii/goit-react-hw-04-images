import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarContainer,
  StyledIcon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitQuery }) => {
  return (
    <SearchbarContainer>
      <SearchForm onSubmit={onSubmitQuery}>
        <SearchFormButton type="submit">
          <StyledIcon />
        </SearchFormButton>
        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};
