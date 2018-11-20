//Unit Tests
describe('addValue', function() {
    it('should return the sum of all the food content', function() {
      expect(addValue(8, 2)).to.equal(10);
    });
  
    it('should return the sum of two decimal numbers', function() {
      expect(subtractValue(2.5, 1.5)).to.equal(4);
    });
  
    it('should return the sum of a decimal number and a string that is coercible to a number', function() {
      expect(subtractValue(2.5, '1.5')).to.equal(4);
    });
  
    it('should return the original total for invalid inputs', function() {
      expect(subtractValue(3, 'weight')).to.equal(4);
    });
  });
  