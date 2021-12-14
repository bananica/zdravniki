import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const Dynamic = function Dynamic({ title, meta, lang }) {
  return <Helmet title={title} htmlAttributes={{ lang }} meta={meta} />;
};

Dynamic.defaultProps = {
  title: 'Zdravniki - Sledilnik',
  meta: [],
  lang: 'sl',
};

Dynamic.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.oneOf(['sl', 'en']),
};
