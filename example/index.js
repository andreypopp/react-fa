/**
 * @jsx React.DOM
 */
var React = require('react');
var ReactDOM = require('react-dom')
var ReactFA = require('../src/index');
var Icon = ReactFA.Icon;
var IconStack = ReactFA.IconStack;

var Demo = React.createClass({

  render() {
    return (
      <article>
        <h1>React Font Awesome Demo</h1>
        <article>
          <h2>Basic Icons</h2>
          <pre>{`<Icon name="camera-retro" />`}</pre>
          <Icon name="camera-retro" />
        </article>
        <article>
          <h2>Larger Icons</h2>
          <pre>{`<Icon name="camera-retro" size="lg" />`}</pre>
          <Icon name="camera-retro" size="lg" />
          <pre>{`<Icon name="camera-retro" size="2x" />`}</pre>
          <Icon name="camera-retro" size="2x" />
          <pre>{`<Icon name="camera-retro" size="3x" />`}</pre>
          <Icon name="camera-retro" size="3x" />
          <pre>{`<Icon name="camera-retro" size="4x" />`}</pre>
          <Icon name="camera-retro" size="4x" />
          <pre>{`<Icon name="camera-retro" size="5x" />`}</pre>
          <Icon name="camera-retro" size="5x" />
        </article>
        <article>
          <h2>Fixed Width Icons</h2>
          <pre>{`<Icon name="check-square" />`}</pre>
          <Icon name="check-square" />
          <pre>{`<Icon name="spinner" spin />`}</pre>
          <Icon name="spinner" spin />
        </article>
        <article>
          <h2>Spinning Icons</h2>
          <pre>{`<Icon name="spinner" spin />`}</pre>
          <Icon name="spinner" spin />
          <pre>{`<Icon name="circle-o-notch" spin />`}</pre>
          <Icon name="circle-o-notch" spin />
          <pre>{`<icon name="refresh" spin />`}</pre>
          <Icon name="refresh" spin />
          <pre>{`<Icon name="cog" spin />`}</pre>
          <Icon name="cog" spin />
        </article>
        <article>
          <h2>Rotated {'&'} Flipped</h2>
          <pre>{`<Icon name="shield" />`}</pre>
          <Icon name="shield" />
          <pre>{`<Icon name="shield" rotate="90" />`}</pre>
          <Icon name="shield" rotate="90" />
          <pre>{`<Icon name="shield" rotate="180" />`}</pre>
          <Icon name="shield" rotate="180" />
          <pre>{`<Icon name="shield" rotate="270" />`}</pre>
          <Icon name="shield" rotate="270" />
          <pre>{`<Icon name="shield" flip="horizontal" />`}</pre>
          <Icon name="shield" flip="horizontal" />
          <pre>{`<Icon name="shield" flip="vertical" />`}</pre>
          <Icon name="shield" flip="vertical" />
        </article>
        <article>
          <h2>Stacked Icons</h2>
          <pre>{`
<IconStack>
  <Icon name="circle" stack="2x" />
  <Icon name="home" stack="1x" inverse={true} />
</IconStack>
`}</pre>
          <IconStack>
            <Icon name="circle" stack="2x" />
            <Icon name="home" stack="1x" inverse={true} />
          </IconStack>
          <pre>{`
<IconStack size="2x">
  <Icon name="circle" stack="2x" />
  <Icon name="home" stack="1x" inverse={true} />
</IconStack>
`}</pre>
          <IconStack size="2x">
            <Icon name="circle" stack="2x" />
            <Icon name="home" stack="1x" inverse={true} />
          </IconStack>
        </article>
      </article>
    );
  }
});

ReactDOM.render(<Demo />, document.getElementById('main'));
