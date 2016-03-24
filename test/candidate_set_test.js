import React from 'react';
import CandidateSet from '../src/screens/ballot/CandidateSet';
import Utils from './utils';

describe('the CandidateSet', function(){
  beforeEach(function () {
    let members = [];
    this.membersBase = {push: jasmine.createSpy("membersBase#push")};
    this.component = Utils.plant(CandidateSet, {
      members: members,
      membersBase: this.membersBase
    });
    this.input = Utils.find(this.component, 'input');
  });

  it('has an input field', function() {
    let titleText = this.input.value;
    expect(titleText).toEqual('');
  });
  describe('submitting new candidate', function () {
    it('pushes a member onto the given set', function () {
      let candidateName = Math.random().toString();
      Utils.fill(this.input, candidateName);
      Utils.submit(this.input);
      expect(this.membersBase.push).toHaveBeenCalledWith({name: candidateName});
    });
  });
});
