const should = require('should');
const { longestSubSeq } = require('../algorithms/longestSubSeq');

describe('longestSubSeq', () => {
  it('should return "abad"', () => {
    const result = longestSubSeq('abazdc', 'bacbad');
    result.should.equal('abad');
  });

  it('should return "aa"', () => {
    const result = longestSubSeq('aa', 'aaaa');
    result.should.equal('aa');
  });

  it('should return "gtab"', () => {
    const result = longestSubSeq('aggtab', 'gxtxayb');
    result.should.equal('gtab');
  });

  it('should return ""', () => {
    const result = longestSubSeq('', 'abcd');
    result.should.equal('');
  });
});
