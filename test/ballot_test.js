import React from 'react';
import Ballot from '../src/screens/ballot/Screen';
import Utils from './Utils';


describe('the ballot screen', function(){
  it('has a title', function() {
    let screen = Utils.plant(Ballot);
    let title = screen.refs.title.refs.input.value;
    expect(title).toEqual('loading...');
  })
});
