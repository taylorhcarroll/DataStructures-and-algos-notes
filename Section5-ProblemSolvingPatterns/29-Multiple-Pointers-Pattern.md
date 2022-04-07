# Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well!

Searching for a pair of values, and search for those like "i" or "j" and you move them in a certain direction, trying to find those two values, like in the frequency counting pattern.

So just to recap, we have a pointer, which is just a variable.

You know, we're looking at a specific location in an array or a string usually, and then we have a second one and we work towards each other or we work in the same direction.

An example where this could make sense:

Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

If it was unsorted we would be out of luck for an efficient solution.

```
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2.0.1.3]) // undefined
sumZero([1,2,3]) // undefined
```
Zero sum "naive approach"
This uses one for loop picking the -3 first, and then a second nested loop to look through the rest of the array for the other pair.
This is inefficient because it is O(n^2).

```
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])
```

This could benefit from a refsctor from the multiple pointers pattern.

### REFACTOR
```
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0 ){
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
```

Time complexity: O(n)
Space complexity: O(1)

This refactor sets up two pointers. Left at index 0, and right at the end of the array using arr.length-1 because an array starts at index 0. It says, while the left is less than the right, you add the two nums up, if the sum is 0, you got your pair you're looking for, otherwise, if the sum is bigger than 0, move the right pointer to the left by 1, otherwise if the sum is smaller, you got too high of a neg number you started with, and need to move up 1 to the right.

