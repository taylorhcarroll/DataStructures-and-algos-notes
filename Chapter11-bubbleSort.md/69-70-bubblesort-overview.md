# BubbleSort

- Generally not all that useful but good to learn so you can see how better sorts algos improve upon it.
- A sorting algorithm where the largest values bubble up to the top.

visualgo.com


Basically you compare two numbers next to each other, and if one is larger you swap them. And then you pick the next pair and swap those. Potentially a number could go from one end of the array to the other if it's the highest value.

We have to repeat this process everytime

[**5**,**3**,4,1,2]<br>
[3,**5**,**4**,1,2]<br>
[3,4,**5**,**1**,2]<br>
[3,4,1,**5**,**2**]<br>
[3,4,1,2,**5**]<br>
that's one iteration.

As we go through the amt of elements we need to go one goes down over time. The 5 is already where it needs to be as it's at the end.

## Before we sort, we swap!

Many sorting algorithms involve some type of swapping functionaly (e.g swapping to numbers to put them in order)

```
//es5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// es2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx2]];
}
```

both work, es5 is a little more legibile, but both are valid.

## Bubblesort pseudocode

- start looping from the end with a variable called `i` the end of the array towards the beginning
- start an inner loop with a variable called `j` from the beginning until `i-`
- if `arr[j]` is greater than `arr[j+1]`, swap those two values.






# 70 Bubblesort implementation

```
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                //swap
                var temp = arr[j]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
bubblesSort([37,45,29,8]);
```
This works but it's not optimized. It goes for too long.

We're sorting it as we go along, so there's no need to check every index each iteration. We want to shorten the amount of items we're checking each time.


```
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                //swap
                var temp = arr[j]
                arr[j+1] = temp;
            }
        }
        console.log("One pass complete")
    }
    return arr;
}
bubblesSort([37,45,29,8]);
```

The reason we change `i` is because now we can use `i` in the `j` loop.

To begin, our array length is 4. Then with the inner loop we're going to compare `j` is less than 4 minus 1. This gives us 3 comparisons. That means `j` goes 4 minus 1. Next time throgh `i` has gone down, `i` minus 3 and so forth.

Here's another way we could have written this with more modern js

```
// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```


# 71 Bubblesort Optimized

There's a specific scenario where it's almost sorted or already sorted. The bubblesort will still try to sort it.

All we need to do is make a check to see if we made any swaps, if we didn't stop the main loop.

```
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```

We make a variable called no swaps. And each time we go through we assume no swaps, until a swap actually happens then we set the variable to false because we made a swap. Just a small change but can really save a lot of time.

Time complexity? In general it is O(n^2).

However if data is sorted or nearly sorted, best case possible is O(n) or even O(2n). That's the best case, it doesn't mean you should use bubblesort very often or at all unless you know your data is **nearly sorted**. But even then there are probably better algos.

