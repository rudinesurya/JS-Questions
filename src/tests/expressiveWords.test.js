const should = require('should');
const { expressiveWords } = require('../algorithms/expressiveWords');

describe('expresiveWords', () => {
  it('should return 1', () => {
    const result = expressiveWords('dddiiiinnssssssoooo', ['ddiinnssoo']);
    result.should.equal(1);
  });

  it('should return 0', () => {
    const result = expressiveWords('dddiiiinnssssssoooo', ['dinsoo']);
    result.should.equal(0);
  });

  it('should return 2', () => {
    const result = expressiveWords('heeellooo', ['hello', 'hi', 'helo', 'heeello']);
    result.should.equal(2);
  });

  it('should return 3', () => {
    const result = expressiveWords('dddiiiinnssssssoooo',
      ['dinnssoo', 'ddinso', 'ddiinnso', 'ddiinnssoo', 'ddiinso', 'dinsoo', 'ddiinsso', 'dinssoo', 'dinso']);
    result.should.equal(3);
  });
});
