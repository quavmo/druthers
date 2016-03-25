import React from 'react';
import CallToAction from '../src/screens/marketing/CallToAction';
import TestUtils from 'react-addons-test-utils';
import Utils from './utils';

describe('the CallToAction', function(){
  describe('when clicked', function () {
    beforeEach(function() {
      let pushSpy = jasmine.createSpy('push');
      this.docketId = "-KBiomm73LN_2g9sxTXT";
      let docketRef = {toString: ()=>`https://druthers-base.firebaseio.com/dockets/${this.docketId}`};
      pushSpy.and.returnValue(docketRef);
      this.docketsBase = {push: pushSpy};
      this.props = {docketsBase: this.docketsBase, alpha: true};
    });

    it('creates a docket', function () {
      this.component = Utils.plant(CallToAction, this.props);
      Utils.click(this.component);

      expect(this.component.defaultDocket).toBeDefined();
      expect(this.docketsBase.push).toHaveBeenCalledWith(this.component.defaultDocket);
    });

    it('navigates to show the new docket', function() {
      window.location.href = "#";
      this.component = Utils.plant(CallToAction, this.props);
      Utils.click(this.component);
      expect(window.location.href).toEqual(`http://localhost:8888/#/dockets/${this.docketId}`);
    });
  });
});
