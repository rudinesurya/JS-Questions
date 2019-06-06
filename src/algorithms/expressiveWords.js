/**
 * For some given string S, a query word is stretchy if it can be made to be equal to S by
 * any number of applications of the following extension operation: choose a group consisting of
 * characters c, and add some number of characters c to the group so that the size of the
 * group is 3 or more.
 *
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
module.exports.expressiveWords = (S, words) => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (expressiveWord(S, word)) {
      count++;
    }
  }
  return count;
};

const expressiveWord = (S, word) => {
  let arr1 = [];
  let arr2 = [];

  let prev = '';
  for (let i = 0; i < S.length; i++) {
    if (prev === S[i]) {
      arr1[arr1.length - 1][1] += 1;
    } else {
      arr1.push([S[i], 1]);
    }

    prev = S[i];
  }

  prev = '';
  for (let i = 0; i < word.length; i++) {
    if (prev === word[i]) {
      arr2[arr2.length - 1][1] += 1;
    } else {
      arr2.push([word[i], 1]);
    }

    prev = word[i];
  }

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] !== arr2[i][0]) return false;
    if (arr1[i][1] < arr2[i][1]) return false;
    if (arr1[i][1] !== arr2[i][1] && arr1[i][1] < 3) return false;
  }

  return true;
};
