/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Icon = React.createClass({

  propTypes: {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['90', '180', '270']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool
  },

  render() {
    var className = 'fa fa-' + this.props.name;
    if (this.props.size) {
      className += ' fa-' + this.props.size;
    }
    if (this.props.rotate) {
      className += ' fa-rotate-' + this.props.rotate;
    }
    if (this.props.flip) {
      className += ' fa-flip-' + this.props.flip;
    }
    if (this.props.fixedWidth) {
      className += ' fa-fw';
    }
    if (this.props.spin) {
      className += ' fa-spin';
    }
    return this.transferPropsTo(<span className={className} />);
  }
});

module.exports = Icon;
