import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import i18next, { t } from 'i18next';
import { t } from 'i18next';

export const FooterInfo = styled('div')(({ theme }) => ({
  fontSize: '12px',
  padding: '0 0 50px',
  margin: '0 24px',
  color: theme.customColors.textLight,

  '&.is-dr-page': {
    borderTop: '1px dashed #CDCDCD',
    marginTop: '24px',
    paddingTop: '16px',
    paddingBottom: '0',
    width: '100%',
  },

  strong: {
    color: theme.customColors.dark,
  },

  a: {
    color: theme.customColors.links,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
}));

const FooterInfoCard = function FooterInfoCard({ isDrPage = false }) {
  /*
  const lastChange = () =>
    Intl.DateTimeFormat(i18next.language, {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(new Date('2021-05-13'));
   */

  return (
    <FooterInfo className={(isDrPage && 'is-dr-page') || ''}>
      {t('footer.dataSource')}:{' '}
      <a href="https://www.zzzs.si" target="_blank" rel="noreferrer">
        ZZZS
      </a>
      {/*
      <br />
      {t('footer.lastChange')}: <strong>{lastChange()}</strong>
      */}
      <br />© 2021-{new Date().getFullYear()} <strong>Sledilnik.org</strong>
    </FooterInfo>
  );
};

FooterInfoCard.defaultProps = {
  isDrPage: false,
};

FooterInfoCard.propTypes = {
  isDrPage: PropTypes.bool,
};

export default FooterInfoCard;
