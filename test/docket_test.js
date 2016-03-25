import React from 'react';
import Docket from '../src/screens/docket/Screen';
// import Title from '../src/screens/docket/Title';
import Utils from './utils';

describe('the docket screen', function(){
  it('has a title', function() {
    let screen = Utils.plant(Docket);
    let input = Utils.find(screen, 'textarea')
    let titleText = input.value;
    expect(titleText).toEqual('');
  });
});
