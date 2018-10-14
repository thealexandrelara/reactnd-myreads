import styled from 'styled-components';

import LoadingControl from '../../components/Loading';
import SearchInput from './components/SearchInput';

export const Container = styled.div``;

export const SearchBox = styled(SearchInput)`
  display: flex;
  margin: 0 auto;
`;

export const Loading = styled(LoadingControl)`
  margin-top: 80px;
`;
