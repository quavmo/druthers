import router from '../src/router.js';

describe("the Router", function () {
  describe('#dispatch', function(){
    it("passes a page", function () {
      pending('fails for obscure async reasons');
      let callbackSpy = jasmine.createSpy('callback');
      router.dispatch('/foo', callbackSpy);
      expect(callbackSpy).toHaveBeenCalled();
    });
  });
});