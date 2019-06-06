const should = require('should');
const { canFinish } = require('../algorithms/courseSchedule');

describe('courseSchedule', () => {
  it('should return true', () => {
    const result = canFinish(2, [[1, 0]]);
    result.should.equal(true);
  });

  it('should return false', () => {
    const result = canFinish(2, [[1, 0], [0, 1]]);
    result.should.equal(false);
  });

  it('should return true', () => {
    const result = canFinish(3, [[2, 1], [1, 0]]);
    result.should.equal(true);
  });

  it('should return false', () => {
    const result = canFinish(3, [[1, 0], [1, 2], [0, 1]]);
    result.should.equal(false);
  });
});
