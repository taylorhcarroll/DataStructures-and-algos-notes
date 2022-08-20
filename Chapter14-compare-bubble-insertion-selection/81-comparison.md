# 81

![O(n) Sorting Algorithms](/Images/bigO-sorting.png "O(n)")

These are often called Quadratic sorting algorithms, because they're all moslty o(n^2)

If data is almost sorted, bubble sort is best. If it's already sorted we only have to iterate once. Doing one comparison for each item.

Selection sort doesn't far as well in that situation. We're gonna go all the way through, and we do it again, it doesn't matter that it's already almost sorted, but it's the easiest to understand which is pretty much it's only positive.


https://www.toptal.com/developers/sorting-algorithms

On the above website, if you click nearly sorted, focus on how insertion and bubble finish pretty quickly. Selection takes forever, but still insertion or bubble generally perform worse than some of the more advanced algorithms but still perform better than all others on nearly sorted data.

So that's time complexity. For space complexity is's about the same, it doesn't matter how long the array is, however what you will see is that some of the more advanced algorithms, create a bunch of smaller arrays, for example merge sort, and it's space complexity is not O(1). But for the 3 we have covered are o(1).

The other weird edge case is insertion sort works really well as an online algorithm, unlike bubble or selection where they would re-sort the whole array each time a new element was added.

## Recap

- sorting is *fundamental!* it's also common in interviews
- bubble sort, selection sort, and insertion sort are all roughly equivalent.
- all have average time complexities that are quadratic
- we can do better, but we need more complex algorithms!

They are worth knowing however, as these can perform better on very small data sets, and we will see why that is.

