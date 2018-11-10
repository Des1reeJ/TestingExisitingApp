//Unit Tests
describe('addValue', function() {
    it('should return the sum of two whole numbers', function() {
      expect(addValue(2, 4)).to.equal(6);
    });
  
    it('should return the sum of two decimal numbers', function() {
      expect(addValue(2.5, 1.5)).to.equal(4);
    });
  
    it('should return the sum of a decimal number and a string that is coercible to a number', function() {
      expect(addValue(2.5, '1.5')).to.equal(4);
    });
  
    it('should return the original total for invalid inputs', function() {
      expect(addValue(4, 'cow')).to.equal(4);
    });
  });
  