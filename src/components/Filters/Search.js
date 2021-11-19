import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';

import * as Styled from './styles';
import * as Icons from 'components/Shared/Icons';
import { useFilter } from 'context/filterContext';
import { useState } from 'react';
import { useDebounce } from 'hooks';

export default function Search() {
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
        borderRadius: '24px',
        margin: '4px',
        height: '48px',
        marginInline: 'auto 8px',
        marginBlock: '16px',
        border: theme => `1px solid ${theme.palette.divider}`,
        background: theme => theme.customColors.background,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          color: theme => theme.customColors.dark,
          background: 'transparent',
          borderRadius: '24px',
          width: 'max-content',
          display: 'flex',
          alignItems: 'center',
          marginInline: '4px',
        }}
      >
        <Icons.Icon name="Search" style={{ marginInline: '8px', opacity: 0.5 }} />
        <Styled.Search.TextField
          placeholder="Išči..."
          size="small"
          value={value}
          onChange={handleSearchChange}
        />
      </Paper>
    </Box>
  );
}
