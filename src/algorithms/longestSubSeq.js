module.exports.longestSubSeq = (s1, s2) => {
  return recurse(s1, s2);
};

const recurse = (s1, s2) => {
  if (s1.length === 0 || s2.length === 0) {
    return '';
  }

  if (s1[0] === s2[0]) {
    return s1[0] + recurse(s1.substring(1), s2.substring(1));
  }

  const move1 = recurse(s1.substring(1), s2);
  const move2 = recurse(s1, s2.substring(1));

  return move1.length > move2.length ? move1 : move2;
};
