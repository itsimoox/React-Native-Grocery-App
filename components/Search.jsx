import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from './';

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchBar>
      <Icon  name="search" />
      <TextInput placeholder="Search" onChangeText={t => setSearch(t)} onBlur={() => console.log(search)} />
    </SearchBar>
  );
}

export default Search;

const SearchBar = styled.View`
  background-color: #F0F2F6;
  width: 100%;
  height: 60px;
  border-radius: 150px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  overflow: hidden;
`;
const TextInput = styled.TextInput`
  padding-right: 35px;
  margin-left: 10px;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: Poppins-SemiBold;
`;