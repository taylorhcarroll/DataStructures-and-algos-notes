# Binary Search

- must be used on sorted arrays
- faster than linear search
- it picks a half way point in the array and checks which direction it needs to pick next in the array.


Let's search for 15:

```
[1,3,4,6,8,9,11,12,15,16,17,18,19]
```

starting at left, 1 is too small
from the right 19 is too big
the middle is 11, which is too small so we elminate the lower half of the array

`[12,15,16,17,18,19]`

left is now 12
right is now 19
middle is 17, which is too big

so elmin top half

`[12,15,16]`

15 is in the middle and it's our answer!

Only took 3 guesses, when if we did linear search it would have taken 9 guesses

As long as we can compare if something is less than or bigger than in any way easily, binary search is good to use.

# Binary Search Pseudo Code
- function accepts a sorted array and value
- create a left pointer at the start of array, and a right pointer at the end of array
- while left point comes before the right pointer
    - create pointer in middle
    - if you find value, return index
    - if value too smae move left point up
    - if value too large, move right pointer down
- if never found, return -1

# Binary Search Solution

```
function binarySearch(arr, elem){
    let start = 0; //starting index
    let end = arr.length - 1 //index of 28
    let middle = Math.floor((start + end) /2);
    /* math.floor rounds us up to whole numbers, since there is no index of 3.5 for example */
    while(arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) /2);
    }
    console.log(start,middle,end);
    if(arr[middle] === elem {
        return middle;
    })
    return -1;
}

binarySearch([2,5,6,9,13,15,28,30], 28)
```

let's condense it down

```
function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) /2);
    while(arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) /2);
    }
    return arr[middle] === elem ? middle : -1
}
binarySearch([2,5,6,9,13,15,28,30], 28)
```

Works great on sorted array otherwise it's useless.

# What about Big O?

O(log n) - worse and average case
O(1) - Best Case