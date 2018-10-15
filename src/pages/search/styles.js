import styled from 'styled-components';

import LoadingControl from '../../components/Loading';
import SearchInput from './components/SearchInput';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h3.no-results-found {
    margin-top: 100px;
    color: #535254;
  }
`;

export const SearchBox = styled(SearchInput)`
  display: flex;
  margin: 0 auto;
`;

export const Loading = styled(LoadingControl)`
  margin-top: 80px;
`;
