/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    children: PropTypes.node.isRequired,
};

const defaultProps = {
    className: '',
    size: null,
};

function IconStack(props) {
  const {
    className,
    size,
    children,
    ...restProps
  } = props;

  const iconStackClassNames = classnames(
    'fa-stack',
    className,
    { [`fa-${size}`]: size, },
  );

  return (
    <span {...restProps} className={iconStackClassNames}>
      {children}
    </span>
  );
}

IconStack.propTypes = propTypes;
IconStack.defaultProps = defaultProps;

export default IconStack;
