# Sliding Window Pattern

This involve creating a *window* which can ether be an array or number from one position to another.

Depending on certain condition, the window either increases or closes and a new window is created

Very useful for keep track of a subset of data in an array string

Example:

Write a function called maxSubarraySum which accepts an array of integers and a number called **n**. The function should calculate the maxmimum sum of **n** consecutive elements in an array.

maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17
maxSubarraySum([4,2,1,6], 1) //6
maxSubarraySum([4,2,1,6,2], 4) //13
maxSubarraySum([], 4) //null

### Naive approach

start a loop, with a second loop that looks ahead and sums 4 items, and keep a variable to keep track of those items

```
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
```

when we call it, we check for edge case first, array has to be length of num right?

starting at 0 doesn't help so we start at -infinity

Created a loop, starts at 0 goes to almost end of array, what we're doing here is if we're looking at 3 digits in a row, we want to start where ever we would end our array.

We make var called temp and temp will store our sum and compare to max, if its larger, update max to temp

So if we have a really large array, and it we're looking for 20 digits, we would go all  the way through and sum 20 together and go forward and keep looping 20 times together each time starting from the beginning. This isn't a great solution because it's big O n^2. There are better ways to do this!

### REFACTOR
```
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    // loop first time up to length of num to get initial sum for comparison
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // set temp to maxsum initially
    tempSum = maxSum;

    //loop again but this time we go the length of the array starting at the next index position, we subtract the first item, and add the next one in line, then get the max of either tempSum or maxSum and return that
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
```

Time complexity is O(n) much better!

Only loop one time even though there are technically 2 loops written down.

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

What we do is in the beginning we sum together the first 3 digits `2,6,9`, and then rather than starting loop at `6`, what we do is we keep a variable that has this total `2,6,9` and all we need to do to figure out the next sum of digits, don't have to re-add `6,9,2` we can just subtract the first number `2` at index0 and add the new number (which happens to also be `2`) at index3.

another example take this array with num 5:
maxSubarraySum([1,2,3,1,2,3,2,3,5,4,3,3,4,5], 5)
subtract the `1` and add the `3` that's all you gotta do.
We don't recalculate everything, just remove/add the relevant stuff as we slide down the array.

