import Util from './utils';
import Finalize from '../src/screens/docket/Finalize';

describe('the finalize control', function () {
  describe("finalizing the docket", function () {
    it('sets final to true', function () {
      let finalBase = {set: jasmine.createSpy('setFinal')};
      let docketBase = {child: ()=>finalBase};
      let component = Util.plant(Finalize, {docketBase});
      let button = Util.find(component, 'a');

      expect(finalBase.set).not.toHaveBeenCalled();
      Util.click(button);
      expect(finalBase.set).toHaveBeenCalledWith(true);

    });
  });

  describe('on a finalized ballot', function () {
    it('displays the URL', function () {
      let final = true;
      let component = Util.plant(Finalize, {final});
      let input = Util.find(component, 'input');

      expect(input.value).toBe(window.location.toString());
    });
  });
});
