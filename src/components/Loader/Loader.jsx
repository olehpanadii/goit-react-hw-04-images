import { MagnifyingGlass } from 'react-loader-spinner';
import { CenteredLoaderWrapper } from './Loader.styled';

export const Loader = ({ loading }) => {
  return (
    <CenteredLoaderWrapper>
      {loading && (
        <MagnifyingGlass
          height={80}
          width={80}
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
    </CenteredLoaderWrapper>
  );
};
