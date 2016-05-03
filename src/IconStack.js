/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

import React, {PropTypes} from 'react';

export default class IconStack extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    children: PropTypes.node.isRequired
  }

  render() {
    let {
      className,
      size,
      children,
      ...props
    } = this.props;

    let classNames = `fa-stack`;

    size = size || 'lg'
    classNames = `${classNames} fa-${size}`;

    if (className) {
      classNames = `${classNames} ${className}`;
    }

    return (
      <span {...props} className={classNames}>
        {children}
      </span>
    )
  }
}
