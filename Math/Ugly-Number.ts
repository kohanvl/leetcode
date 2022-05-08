// Easy - https://leetcode.com/problems/ugly-number/
function isUgly(n: number): boolean {
    if(n < 1) return false;
    for(let i = 5; i > 1; i--){
        while(n % i === 0) n /= i;
        if(n === 1) return true;
    }
    return false;
};
