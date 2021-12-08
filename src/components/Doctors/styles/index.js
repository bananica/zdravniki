import { styled } from '@mui/material/styles';
import BaseInfiniteScroll from 'react-infinite-scroll-component';

import { Grid } from 'components/Shared';

import { SIZES } from 'const';

export const Wrapper = styled(Grid.Doctors)(({ theme }) => ({
  scrollBehavior: 'smooth',
  backgroundColor: theme.customColors.backgroundLight,
}));

export const ButtonWrapper = styled('div')(() => ({
  marginTop: '1rem',
  width: '100%',
  textAlign: 'center',
}));

export const WrapperInfinite = styled('div')(({ theme }) => ({
  width: '100%',
  height: `calc(100vh - ${SIZES.MAP_HEIGHT.default} - 56px - 140.5px)`,
  overflow: 'auto',
  display: 'flex',
  zIndex: 500,
  position: 'relative',
  boxShadow: '0 0 15px 0 rgba(0,0,0,0.18)',

  '> .infinite-scroll-component__outerdiv': {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    height: `calc(100vh - ${SIZES.MAP_HEIGHT.upSmall} - 56px - 140.5px)`,
  },
  [theme.breakpoints.up('md')]: {
    height: 'calc(100vh - 64px - 91px)',
  },
  [theme.breakpoints.up('lg')]: {
    height: 'calc(100vh - 64px - 54px)',
  },
}));
export const InfiniteScroll = styled(BaseInfiniteScroll)(({ theme }) => ({
  marginTop: '0',
  display: 'grid',
  width: '100%',
  paddingBottom: '50px',

  '> *:last-child': {
    marginBottom: theme.spacing(2),
  },
}));
