# sorting

## what is sorting?

- sorting is process of rearranging the items in a collection like an array so that the items are in osme kind of order

ex:
- sorting numbers from smaller to larger
- sorting names alphabetically
- sorting movies by revenue

```
function sort(arr){
    return arr
}
sort([23,45,6,12,13])

[6,12,13,23,45]
```

## Why learn this?

- sorting is an incredibly common task, so it's good to know how it works (even if you use the prebuilt language sorting methods)
- helps you know which ones are better and worse depending on situation
- there are many different ways to sor things, and diff techniques to, and good to know which ones you should use
- comes up often in interviews

Take a look at the way diff algos approach the same sets of data
https://www.toptal.com/developers/sorting-algorithms

## Objectives
- bubble sort
- selection sort
- insertion sort
- understand why it is important to learn these simpler sorting algos (before moving on to more advanced ones)

# Built in JS Sort Method

`["Steele", "Colt", "Data Structures", "Algorithms"].sort();`
``
goes from a-z
but for numbers is weird
```
[6,4,15,10].sort();
//[10,15,4,6]
```

Whats happening? It sorts them by default according to Unicode string points. Every item in array is converted to string, then unicode value is taken, not always what you want.

You gotta pass something in! Something to compare

- built in sort method accepts an optional comparator function
- you can use this comparator function to tell JavaScript how you want it to sort
- comparator looks at pairs of elements (a and b), determines their sort order based on return value
    - if returns a neg num, a should come before b
    - if return pos num, a should come after b
    - if returns 0, a and b are the same as far as sort if concerned

Example:

```
function numberCompare(num1, num2) {
    return num1 - num2
}
[6,4,15,10].sort(numberCompare)
// get [6,4,10,15]
```

a way to sort from shortest to longest length of string

```
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
```
