import React from 'react';
import Docket from '../src/screens/docket/Screen';
import Finalize from '../src/screens/docket/Finalize';
import Util from './utils';

describe('the docket screen', function(){
  it('has a title', function() {
    let screen = Util.plant(Docket);
    let input = Util.find(screen, 'textarea')
    let titleText = input.value;
    expect(titleText).toEqual('');
  });
});
