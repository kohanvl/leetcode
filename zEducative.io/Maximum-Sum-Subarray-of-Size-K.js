/**
 * Given an array of positive numbers and a positive number ‘k,’ 
 * find the maximum sum of any contiguous subarray of size ‘k’.
    Example 1:
    Input: [2, 1, 5, 1, 3, 2], k=3
    Output: 9
    Explanation: Subarray with maximum sum is [5, 1, 3].
    ---
    Example 2:
    Input: [2, 3, 4, 1, 5], k=2
    Output: 7
    Explanation: Subarray with maximum sum is [3, 4].
    ---
    console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
 */

// Aproach 2 - O(n)
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
}

/**
  * Aproach 1 - O(n*k)
    const max_sub_array_of_size_k = function(k, arr) {
    let left = 0;
    let right = k;
    let max = -1;
    while(right < arr.length){
        let sum = 0;
        for(let i = left; i < right; i++){
        sum += arr[i];
        }
        left++;
        right++;
        max = Math.max(max, sum);
    }
    return max;
    };
*/
