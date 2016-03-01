import React from 'react';
import Gratitude from '../src/screens/marketing/Gratitude';
import TestUtils from 'react-addons-test-utils';
import Utils from './utils';

describe('the gritutude seciotn', function(){
  describe('when submitted', function () {
    beforeEach(function() {
      let pushSpy = jasmine.createSpy('push');
      this.feelingsBase = {push: pushSpy};
    });

    it('pushes a feeling', function () {
      this.component = Utils.plant(Gratitude, {feelingsBase: this.feelingsBase});
      Utils.fill(this.component.refs.input, 'I hope this rules!');

      expect(this.feelingsBase.push).not.toHaveBeenCalled();
      Utils.submit(this.component.refs.input)
      expect(this.feelingsBase.push).toHaveBeenCalledWith('I hope this rules!');
    });
  });
});
