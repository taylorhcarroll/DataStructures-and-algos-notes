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

```
same([1,2,3,], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) // false
```
the initial approach:
```
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
```
so the above is a nested loop solution. It works, but it isn't the best approach because it the O(n^2) time complexity

What is helpful is
```
 if(arr1.length != arr2.length) {
        return false
```
If the lengths aren't even the same length go ahead and return false because there's no way they are comparable. This is helpful for edge cases like this.
The splice just removes the item we already checked from the 2nd array so there's less to loop or check through for the next time. There just needs to be a way to remember we've already checked an item.

## REFACTORED

```
function same(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)){
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}
same([1,2,3,2,5], [9,1,4,4,11])
//false
same([1,2,3,2], [9,1,4,4])
//true
```
two loops is vastly better than 1 nested loop!
result is O(n) time complexity.
Not a matter of checking if there is a 4 in the 2nd array, needs to have two 4's.

