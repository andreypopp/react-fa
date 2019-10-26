/**
 * @copyright 2015-present, Andrey Popp <8mayday@gmail.com>
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import Icon from '../Icon';

describe('Icon', () => {
  it('renders Font Awesome className', () => {
    const markup = renderToString(<Icon name="plus" />);
    expect(/<span class="fa fa-plus"/.exec(markup)).toBeTruthy();
  });

  it('supports "size"', () => {
    const markup = renderToString(<Icon size="lg" name="plus" />);
    expect(/<span class="fa fa-plus fa-lg"/.exec(markup)).toBeTruthy();
  });

  it('supports "rotate"', () => {
    const markup = renderToString(<Icon rotate="45" name="plus" />);
    expect(/<span class="fa fa-plus fa-rotate-45"/.exec(markup)).toBeTruthy();
  });

  it('supports "flip"', () => {
    const markup = renderToString(<Icon flip="horizontal" name="plus" />);
    expect(/<span class="fa fa-plus fa-flip-horizontal"/.exec(markup)).toBeTruthy();
  });

  it('supports "fixedWidth"', () => {
    const markup = renderToString(<Icon fixedWidth name="plus" />);
    expect(/<span class="fa fa-plus fa-fw"/.exec(markup)).toBeTruthy();
  });

  it('supports "spin"', () => {
    const markup = renderToString(<Icon spin name="plus" />);
    expect(/<span class="fa fa-plus fa-spin"/.exec(markup)).toBeTruthy();
  });

  it('supports "pulse"', () => {
    const markup = renderToString(<Icon pulse name="plus" />);
    expect(/<span class="fa fa-plus fa-pulse"/.exec(markup)).toBeTruthy();
  });

  it('supports "stack"', () => {
    const markup = renderToString(<Icon stack="2x" name="plus" />);
    expect(/<span class="fa fa-plus fa-stack-2x"/.exec(markup)).toBeTruthy();
  });

  it('supports "inverse"', () => {
    const markup = renderToString(<Icon inverse name="plus" />);
    expect(/<span class="fa fa-plus fa-inverse"/.exec(markup)).toBeTruthy();
  });

  it('supports custom className', () => {
    const markup = renderToString(<Icon className="x" name="plus" />);
    expect(/<span class="fa fa-plus x"/.exec(markup)).toBeTruthy();
  });

  it('can be rendered using different DOM component', () => {
    const markup = renderToString(<Icon Component="i" name="plus" />);
    expect(/<i class="fa fa-plus"/.exec(markup)).toBeTruthy();
  });
});
