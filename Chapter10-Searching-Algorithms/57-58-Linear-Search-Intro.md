# Search Algorithm

Objectives

- describe what searching algo
- implement linear search on arrays
- implement binary search on sorted arrays
- implement a naive string searching algo
- implement the KMP string searching algo

# Linear Search

Search for 12:

[5,8,1,100,12,3,12]

Here's some psuedocode:

- function accepts an array and value
- takes array full of numbers
- and a value
- loop through array and check if the current array is equal to values
- if it is, return the indext at element found
- if never find return -1

# 58 Linear Search solution

```
function linearSearch(arr, target){
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
```

This is what built in js functions are doing. Things like:
Array.find()
Array.IndexOf()

Big O of this is O(n)