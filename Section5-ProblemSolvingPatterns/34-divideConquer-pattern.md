# Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repreating a process with a subset of data

this pattern can tremendously decrease time complexity.

This pattern is itself used in other patterns like sorting algos for example: quickSort and mergeSort, or searching algos like binarySearch trees.

Classic example to use this is BinarySearch

Accept an array of sorted numbers (must be sorted) that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1

search([1,2,3,4,5])

naive solution:

```
function search(arr, val) {
    for (let i=0; i < arr.length; i++) {
        if(arr[i] == val) {
            return i;
        }
    }
    return -1
}
```
linear search O(n)

refactored:

```
function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currenElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return - 1;
}

```
time complexity - Log(n) - binary search!

example:
[1,2,3,5,6,8,9,12,15,16,29]
we could start at beginning and go up till we find 15,
or
we can start in the middle and check if it's above or below or target. If it's above, we ignore the first half of the array, and look at subarray of `9,12,15,16,29` and divide that up.

We will go over more of this in a future section!

