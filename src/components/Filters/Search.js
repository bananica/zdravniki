import { useLocation } from 'react-router-dom';

import * as Icons from 'components/Shared/Icons';
import { useFilter } from 'context/filterContext';
import { useState } from 'react';
import { useDebounce } from 'hooks';
import { t } from 'i18next';
import * as Styled from './styles';

const Search = function Search() {
  const { state } = useLocation();
  const { setSearchValue } = useFilter();

  const defaultValue = state?.searchValue ?? '';
  const [value, setValue] = useState(defaultValue);

  const handleSearchChange = event => {
    setValue(event.target.value);
  };

  useDebounce(() => setSearchValue(value), 500, [value]);
  return (
    // <Styled.Search.SearchBox>
    <Styled.Search.SearchPaper elevation={0}>
      <Styled.Search.Search>
        <Styled.Search.SearchIconWrapper>
          <Icons.Icon name="Search" />
        </Styled.Search.SearchIconWrapper>
        <Styled.Search.InputBase
          placeholder={t('search')}
          value={value}
          onChange={handleSearchChange}
          aria-label="search"
          type="search"
        />
      </Styled.Search.Search>
    </Styled.Search.SearchPaper>
    // </Styled.Search.SearchBox>
  );
};

export default Search;
