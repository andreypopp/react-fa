/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Icon = React.createClass({

  propTypes: {
    tag: PropTypes.string.oneOf(['span', 'i']),
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['45', '90', '135', '180', '225', '270', '315']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    stack: PropTypes.oneOf(['1x', '2x']),
    inverse: PropTypes.bool
  },

  render() {
    /*jshint eqnull:true */
    var {
      tag, name, size, rotate, flip, spin, fixedWidth, stack, inverse,
      pulse, className, ...props
    } = this.props;
    var classNames = `fa fa-${name}`;
    if (size) {
      classNames += ` fa-${size}`;
    }
    if (rotate) {
      classNames += ` fa-rotate-${rotate}`;
    }
    if (flip) {
      classNames += ` fa-flip-${flip}`;
    }
    if (fixedWidth) {
      classNames += ' fa-fw';
    }
    if (spin) {
      classNames += ' fa-spin';
    }
    if (pulse) {
      classNames += ' fa-pulse';
    }
    
    if (stack) {
      classNames += ` fa-stack-${stack}`;
    }
    if (inverse) {
      classNames += ' fa-inverse';
    }
    
    if (className) {
      classNames += ` ${className}`;
    }

    if (tag === 'i') {
      return <i {...props} className={classNames} />;
    } else {
      return <span {...props} className={classNames} />;
    }
  }
});

module.exports = Icon;
