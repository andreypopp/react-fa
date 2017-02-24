/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['45', '90', '135', '180', '225', '270', '315']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    stack: PropTypes.oneOf(['1x', '2x']),
    inverse: PropTypes.bool,
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const defaultProps = {
    Component: 'span',
    className: '',
    size: null,
    rotate: null,
    flip: null,
    fixedWidth: false,
    spin: false,
    pulse: false,
    stack: null,
    inverse: false,
};

function Icon(props) {
  const {
    Component,
    name, size, rotate, flip, spin, fixedWidth, stack, inverse,
    pulse, className, ...restProps
  } = props;

  const iconClassNames = classnames(
      `fa fa-${name}`,
      className,
      {
          [`fa-${size}`]: size,
          [`fa-rotate-${rotate}`]: rotate,
          [`fa-flip-${flip}`]: flip,
          [`fa-stack-${stack}`]: stack,
          'fa-fw': fixedWidth,
          'fa-spin': spin,
          'fa-pulse': pulse,
          'fa-inverse': inverse,
      },
  );

  return <Component {...restProps} className={iconClassNames} />;
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;