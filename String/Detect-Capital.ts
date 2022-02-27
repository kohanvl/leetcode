// Easy - https://leetcode.com/problems/detect-capital/
const detectCapitalUse = (word: string): boolean => {
  return (
    (word[0] === word[0].toUpperCase() &&
      word.slice(1) === word.slice(1).toLowerCase()) ||
    word === word.toUpperCase() ||
    word === word.toLowerCase()
  );
};
