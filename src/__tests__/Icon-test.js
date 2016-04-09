/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

import assert from 'power-assert';
import React  from 'react';
import {renderToString} from 'react-dom/server';
import Icon   from '../Icon';

describe('Icon', function() {

  it('renders Font Awesome className', function() {
    let markup = renderToString(<Icon name="plus" />);
    assert(/<span class="fa fa-plus"/.exec(markup));
  });

  it('supports "size"', function() {
    let markup = renderToString(<Icon size="lg" name="plus" />);
    assert(/<span class="fa fa-plus fa-lg"/.exec(markup));
  });

  it('supports "rotate"', function() {
    let markup = renderToString(<Icon rotate="45" name="plus" />);
    assert(/<span class="fa fa-plus fa-rotate-45"/.exec(markup));
  });

  it('supports "flip"', function() {
    let markup = renderToString(<Icon flip="horizontal" name="plus" />);
    assert(/<span class="fa fa-plus fa-flip-horizontal"/.exec(markup));
  });

  it('supports "fixedWidth"', function() {
    let markup = renderToString(<Icon fixedWidth name="plus" />);
    assert(/<span class="fa fa-plus fa-fw"/.exec(markup));
  });

  it('supports "spin"', function() {
    let markup = renderToString(<Icon spin name="plus" />);
    assert(/<span class="fa fa-plus fa-spin"/.exec(markup));
  });

  it('supports "pulse"', function() {
    let markup = renderToString(<Icon pulse name="plus" />);
    assert(/<span class="fa fa-plus fa-pulse"/.exec(markup));
  });

  it('supports "stack"', function() {
    let markup = renderToString(<Icon stack="2x" name="plus" />);
    assert(/<span class="fa fa-plus fa-stack-2x"/.exec(markup));
  });

  it('supports "inverse"', function() {
    let markup = renderToString(<Icon inverse name="plus" />);
    assert(/<span class="fa fa-plus fa-inverse"/.exec(markup));
  });

  it('supports custom className', function() {
    let markup = renderToString(<Icon className="x" name="plus" />);
    assert(/<span class="fa fa-plus x"/.exec(markup));
  });

  it('can be rendered using different DOM component', function() {
    let markup = renderToString(<Icon Component="i" name="plus" />);
    assert(/<i class="fa fa-plus"/.exec(markup));
  });
});
