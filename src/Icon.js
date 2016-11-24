/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

import React, {PropTypes} from 'react';
import joinClassNames from 'joinable';

export default class Icon extends React.Component {

  static propTypes = {
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

  static defaultProps = {
    Component: 'span',
  };

  render() {
    let {
      Component,
      name, size, rotate, flip, spin, fixedWidth, stack, inverse,
      pulse, className, ...props
    } = this.props;

    const classNames = joinClassNames(
      'fa', 
      `fa-${name}`,
      [size, `fa-${size}`],
      [rotate, `fa-rotate-${rotate}`],
      [flip, `fa-flip-${flip}`],
      [fixedWidth, 'fa-fw'],
      [spin, 'fa-spin'],
      [pulse, 'fa-pulse'],
      [stack, `fa-stack-${stack}`],
      [inverse, 'fa-inverse'],
      className);

    return <Component {...props} className={classNames} />;
  }
}
