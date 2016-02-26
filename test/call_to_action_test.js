import CallToAction from '../src/pages/marketing/CallToAction';
import Utils from './utils';

describe('the CallToAction', function(){
  beforeEach(function(){
    this.clickSpy   = Utils.stub(CallToAction, 'handleClick');
    this.component  = Utils.plant(CallToAction);
  });

  describe('when clicked', function () {
    beforeEach(function(){
      Utils.click(this.component);
    });

    it('creates a ballot', function(){
      expect(this.clickSpy).toHaveBeenCalled();
    });
  });
});
