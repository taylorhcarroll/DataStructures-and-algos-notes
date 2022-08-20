# 78 Insertion Sort

Insertion is pretty similar to selection and bubble, however, there are some key distinctions. There are situation where insertion sort does well.

- builds up the sort by gradually creation a larger left half which is always sorted.

[**5**,*3*,4,1,2]<br>
[**3**,**5**,*4*,1,2]<br>
[**3**,**4**,**5**,*1*,2]<br>
[**1**,**3**,**4**,**5**,*2*]<br>
[**1**,**2**,**3**,**4**,**5**]<br>

check it out on visualgo.com

## Insertion sort pseudocode

- start by picking the 2nd element in array
- now compare to the 2nd element with one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iteration through the sorted portion, (ie the left side) to place the element in the correct place.
- repeat until the array is sorted.


# 79 Insertion sort: implementation

```
function insertionSort(arr){
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            console.log("i: ", i, "j: ", j)
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr;
}
insertionSort([2,1,9,76,4,0])
```
no need to start with first element, that can be an edge case. We take 4, and compare it backwards, if 4 is less than 76 we can move 76 up to 4's position, and then we check the next one down 9, where does 4 fit? so we move 9 up to where 4 currently is, and we move on to 2 and so forth.

After the inner loop finishes we found the correct spot on where to insert our current value. So all we do is insert the currentVal at arr[j+1]. We are putting in the next spot up from the comparison. So if we are currently lookinh at `4`, comparing to `0`, we move `4` to where `0`. So next time we start with `4`, and compare to `9`, and keep going until we get to `1`, well `1` is smaller than `4` so we put it at the next spot up from where we checked, which was 9's spot, one up from `1`'s index.

If you get stuck, console what i and j are every time like I did above. it will really help you understand what's going on each time in that loop.


# 80 Insertion sort: big O complexity

Similar to theo there two we've seen so far. O(n^2). If our data is almost all sorted, it wouldn't be so bad, completely random is not great, and worst case is if it was sorted the oppose way we wanted it to.

Now a situation where insertion sort is good, is **if your algorithim can work as data is coming in, as it receives new data**

There's a term called *online algorithim* which the above scenario. It works as data comes in. It doesn't have to have the entire array at once to work.

With insertion sort, because of the way it work, we keep one side sorted in the array, doesn't matter how many times we receive data, it always keeps one side sorted.


