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

- start looping from with a variable called `i` the end of the array towards the beginning
- start an inner loop with a variable called `j` from the beginning until `i-`
- if `arr[j]` is greater than `arr[j+1]`, swap those two values.






