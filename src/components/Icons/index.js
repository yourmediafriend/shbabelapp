import React from 'react';
import PropTypes from 'prop-types';
import { findKey } from 'lodash/fp';
import iconJson from '../../fonts/icons';

const getIcon = (iconJson, icon) => {

  let p = findKey(function(o) { return o.name === icon }, iconJson.selection);

  if (p) {
    return iconJson.icons[p]['paths'];
  }
  return [];

}

const Icon = props => {

  const { icon } = props;

  // we should be able to pass own style from parent eg I want svg to be a block.
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1024 1024"
    >
      {getIcon(iconJson, icon).map((child, index) => <path
          key={index}
          style={styles.path}
          d={ child }
        />
      )}
    </svg>);
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  size: 16,
};

export default Icon;