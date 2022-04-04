# Problem Solving Patterns
Some Example patterns:
    frequency counters
    multiple pointers
    sliding window 
    divide and conquer 
    dynamic programming
    greedy algorithms
    backtracking


## Frequency Pattern

This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

Example:
Write a function called Same which accepts two arrays, the function should return true if every value in the array has it/s corresponding value squared in the second array, the freuqnecy of values must be the same

same([1,2,3,], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) // false

the initial approach:

function same(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        //what is the index of the array value squared, should match to value in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
same([1,2,3,2], [9,1,4,4])

so the above is a nested loop solution. It works, but it isn't the best approach because it the O(n) is O
