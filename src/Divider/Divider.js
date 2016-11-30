import React, {PropTypes} from 'react';
import {
  View,
} from 'react-native';
import {IS_WEB} from '../utils/platform';

const Divider = (props, context) => {
  const {
    inset,
    style,
    ...other
  } = props;

  const {
    baseTheme,
    prepareStyles,
  } = context.muiTheme;

  const styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor,
    },
  };

  return React.createElement(
    IS_WEB ? 'hr' : View,
    {
      ...other,
      style: prepareStyles(Object.assign(styles.root, style)),
    }
  );
};

Divider.muiName = 'Divider';

Divider.propTypes = {
  /**
   * If true, the `Divider` will be indented.
   */
  inset: PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

Divider.defaultProps = {
  inset: false,
};

Divider.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Divider;
