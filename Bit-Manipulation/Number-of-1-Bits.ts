// Easy - https://leetcode.com/problems/number-of-1-bits/
const hammingWeight = (n: number): number => {
  const binaryString: string = n.toString(2);
  const LENGTH_OF_BS: number = 32;
  let result: number = 0;
  for (let i = 0; i < LENGTH_OF_BS; i++) {
    if (binaryString[i] === '1') result++;
  }
  return result;
};
