import React from 'react';
import CallToAction from '../src/screens/marketing/CallToAction';
import TestUtils from 'react-addons-test-utils';
import Utils from './utils';

describe('the CallToAction', function(){
  describe('when clicked', function () {
    beforeEach(function() {
      let pushSpy = jasmine.createSpy('push');
      this.ballotId = "-KBiomm73LN_2g9sxTXT";
      let ballotRef = {toString: ()=>`https://druthers-base.firebaseio.com/ballots/${this.ballotId}`};
      pushSpy.and.returnValue(ballotRef);
      this.ballotsBase = {push: pushSpy};
      this.props = {ballotsBase: this.ballotsBase, alpha: true};
    });

    it('creates a ballot', function () {
      this.component = Utils.plant(CallToAction, this.props);
      Utils.click(this.component);

      expect(this.component.defaultBallot).toBeDefined();
      expect(this.ballotsBase.push).toHaveBeenCalledWith(this.component.defaultBallot);
    });

    it('navigates to show the new ballot', function() {
      window.location.href = "#";
      this.component = Utils.plant(CallToAction, this.props);
      Utils.click(this.component);
      expect(window.location.href).toEqual(`http://localhost:8888/#/ballots/${this.ballotId}`);
    });
  });
});
