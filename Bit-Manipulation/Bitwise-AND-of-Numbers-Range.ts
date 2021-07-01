const rangeBitwiseAnd = (left: number, right: number): number => {
  let count: number = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    count++;
  }
  return left << count;
};
