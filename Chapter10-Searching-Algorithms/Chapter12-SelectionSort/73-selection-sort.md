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
\


