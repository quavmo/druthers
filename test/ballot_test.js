import React from 'react';
import Ballot from '../src/screens/ballot/Screen';
import Util from './utils';

describe('the ballot screen', function(){
  it('has a title', function() {
    let titleText = "Something great!";

    let screen = Util.plant(Ballot, {ballot: {title: titleText}});
    let title = Util.find(screen, 'h1');

    expect(title.textContent).toEqual(titleText);
  });
});
