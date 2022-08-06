//Divide and conquer example, this is actually the quickSort example.
//just wanted something here so you had an example of what we're talking about but not going into depth about quckSort until we get to that chapter.

const arr = [43, 3, 34, 34, 23, 232, 3434, 4, 23, 2, 54, 6, 54];
// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    let len = arr.length, index;
    if (len > 1) {
        index = partition(arr, left, right)
        if (left < index - 1) {
            quickSort(arr, left, index - 1)
        }
        if (index < right) {
            quickSort(arr, index, right)
        }
    }
    return arr
}
const partition = (arr, left, right) => {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left, // Start pointer at the first item in the
        array
    j = right // Start pointer at the last item in the array
    while (i <= j) {
        // Move left pointer to the right until the value at the
        // left is greater than the pivot value
        while (arr[i] < pivot) {
            i++
        }
        // Move right pointer to the left until the value at the
        // right is less than the pivot value
        while (arr[j] > pivot) {
            j--
        }
        // If the left pointer is less than or equal to the
        // right pointer, then swap values
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]] // ES6 destructuring swap
            i++
            j--
        }
    }
    return i
}
console.log(quickSort(arr));