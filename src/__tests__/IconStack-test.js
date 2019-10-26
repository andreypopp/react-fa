/**
 * @copyright 2015-present, Andrey Popp <8mayday@gmail.com>
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import Icon from '../Icon';
import IconStack from '../IconStack';

describe('IconStack', () => {
  it('renders icon stack container with default size', () => {
    const markup = renderToString(
      <IconStack>
        <Icon name="plus" />
      </IconStack>,
    );
    expect(/<span class="fa-stack"/.exec(markup)).toBeTruthy();
  });

  it('supports optional "size"', () => {
    const markup = renderToString(
      <IconStack size="2x">
        <Icon name="plus" />
      </IconStack>,
    );
    expect(/<span class="fa-stack fa-2x"/.exec(markup)).toBeTruthy();
  });

  it('supports custom className', () => {
    const markup = renderToString(
      <IconStack className="x">
        <Icon name="plus" />
      </IconStack>,
    );
    expect(/<span class="fa-stack x"/.exec(markup)).toBeTruthy();
  });
});
