function lengthOfLastWord(s: string): number {
  return s
    .split(' ')
    .filter((e) => e !== '')
    .reverse()[0].length;
}
