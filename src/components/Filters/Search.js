import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';

import * as Icons from 'components/Shared/Icons';
import { useFilter } from 'context/filterContext';
import { useState } from 'react';
import { useDebounce } from 'hooks';
import { t } from 'i18next';
import * as Styled from './styles';

const Search = function Search() {
  const { setSearchValue } = useFilter();
  const [value, setValue] = useState('');

  const handleSearchChange = event => {
    setValue(event.target.value);
  };

  useDebounce(() => setSearchValue(value), 500, [value]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '25px',
        border: theme => `1px solid ${theme.customColors.borderLight}`,
        background: '#fff',
        gridArea: 'search',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          color: theme => theme.customColors.dark,
          background: 'transparent',
          borderRadius: '24px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Styled.Search.Search>
          <Styled.Search.SearchIconWrapper>
            <Icons.Icon name="Search" />
          </Styled.Search.SearchIconWrapper>
          <Styled.Search.InputBase
            placeholder={t('search')}
            value={value}
            onChange={handleSearchChange}
            aria-label="search"
          />
        </Styled.Search.Search>
      </Paper>
    </Box>
  );
};

export default Search;
