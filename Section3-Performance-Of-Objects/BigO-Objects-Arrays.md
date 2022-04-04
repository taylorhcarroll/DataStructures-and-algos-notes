# Objects

Unordered, key value pairs

```
let instructor = {
    firstName: "Taylor",
    isInstructor: true,
    favoriteNumbers: [69, 8, 51]
}
```
When to use Objects:
- when you don't need order
- when you need fast access / insertion and removal

Big O of Objects:

- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(1)

When you don't need any ordering, objects are an excellent Choice.

# Arrays

Ordered Lists!

When to use?
- When you need order
- when you need fast access / insertion and removal (sort of....)

When are they slow?

Big O of Arrays:
- Insertion: depends
- Removal: depends
- Searching: O(n)
- Access: O(1)

Insertion is complicated because you have to re-index everything after inserting at the beginning or removing

Push and Pop always faster than shift/unshift unless of course it's an empty array

Accessing is always fast, because you're picking by the index. No need to loop through or anything like that.

Searching, the more things in your array, the longer it takes to loop through it.

## Big O of Array Methods

- push: O(1)
- pop: O(1)
- shift: O(n)
- unshift: O(n)
- concat: O(n) 
    - technically it's O(n + m) where m is the 2nd array
- slice: O(n)
- splice: O(n)
- sort: O(n * log n)
- forEach/map/filter/reduce/etc... - O(n)












