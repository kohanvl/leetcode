// Easy - https://leetcode.com/problems/add-strings/
function addStrings(num1: string, num2: string): string {
  return BigInt(num1) + BigInt(num2) + '';
}
