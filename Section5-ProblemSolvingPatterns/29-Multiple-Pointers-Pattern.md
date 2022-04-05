# Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well!

Searching for a pair of values, and search for those like "i" or "j" and you move them in a certain direction, trying to find those two values, like in the frequency counting pattern.

So just to recap, we have a pointer, which is just a variable.

You know, we're looking at a specific location in an array or a string usually, and then we have a second one and we work towards each other or we work in the same direction.

An example where this could make sense:

Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
```
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2.0.1.3]) // undefined
sumZero([1,2,3]) // undefined
```
Zero sum "naive approach"

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