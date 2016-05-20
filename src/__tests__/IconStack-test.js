/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

import assert from 'power-assert';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Icon from '../Icon';
import IconStack from '../IconStack';

describe('IconStack', function() {

  it('renders icon stack container with default size', function() {
    let markup = renderToString(
      <IconStack>
        <Icon name='plus' />
      </IconStack>
    )
    assert(/<span class="fa-stack"/.exec(markup))
  });

  it('supports optional "size"', function() {
    let markup = renderToString(
      <IconStack size='2x'>
        <Icon name='plus' />
      </IconStack>
    )
    assert(/<span class="fa-stack fa-2x"/.exec(markup))
  });

  it('supports custom className', function() {
    let markup = renderToString(
      <IconStack className='x'>
        <Icon name='plus' />
      </IconStack>
    )
    assert(/<span class="fa-stack x"/.exec(markup))
  });
});
