import React from 'react';
import Ballot from '../src/screens/ballot/Screen';
// import Title from '../src/screens/ballot/Title';
import Utils from './utils';

describe('the ballot screen', function(){
  it('has a title', function() {
    let screen = Utils.plant(Ballot);
    let input = Utils.find(screen, 'textarea')
    let titleText = input.value;
    expect(titleText).toEqual('');
  });
});
