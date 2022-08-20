# Selection Sort

Similar to bubblesort but instead of first placing large values into sorted position, it places small values into sorted position.

[**5**, **3**, 4, 1, 2]<br>
[**5**, *3*, **4**, 1, 2]<br>
[**5**, *3*, 4, **1**, 2]<br>
[**5**, 3, 4, *1*, **2**]<br>
[*1*, 3, 4, 5, 2]<br>

check it out in action in visualgo.com

Set a minimum value which is usually the first index, then we compare it, if it's larger the min value stays, and we keep going until we find the smallest number. That then becomes the new minium value.

Once we get all the way through, that min value becomes the first indexed position via swapping with the first indexed number we checked when we went through. In the above example, `5` swapped positions with `1` because `1` was the smallest value we found.

On our next pass, we start over but we start at the next position because we don't need to compare the first number because it has already been sorted.

We repeat our process swapping positions with the smallest number each time until there are no other swaps.

## Selection Sort PseudoCode

- make a variable to store min value, at beginning you can set the first value to that.
- compare this item to the next item in the array until you find a smaller number.
- if smaller number is found, designate that smaller number to the new "minimum" and continue until the end of the array.
- if the "minimum" is not the value (index) you initially began with, swap the two values.
- repeat this with the next element until the array is sorted.

# SelectionSort Implementation

```

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (j = i+1; j < arr.length; j++) {
            console.log(i, j)
            if (arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        console.log("***********")
        console.log(arr)
        console.log("Swapping to: ")
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        console.log(arr)
        console.log("***********")
    }
    return arr;
}

selectionSort([34,22,10,19,17])
```

```
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (j = i+1; j < arr.length; j++) {
            console.log(i, j)
            if (arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        console.log(i, lowest)
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;

    }
    return arr;
}

selectionSort([0,2,34,22,10,19,17])
```

Sometimes we go through and it swaps the lowest with itself and that's an extra step we don't need. So a small change we can do is:


```
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (j = i+1; j < arr.length; j++) {
            console.log(i, j)
            if (arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest) {
            console.log(i, lowest)
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([0,2,34,22,10,19,17])
```

if we re-run this, we only make 4 swaps in the end.

Here is the same solution in es6.
We pull swap into it's own function.

```
// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
```

# 76 Big O for Selection Sort

We have to compare every element to every other element. Techically is O(n^2)

Where selection sort is better than bubblesort is where you want to minimize the number of swaps you want to make. In selection sort we iterate and compare a lot, but we only make one swap. Make if we were worried about memory allocation or something, this could be helpful. It's not terrible useful, but it is easy to do and helps prepare us for even better sorting algos.