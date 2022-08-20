# Intermedite sorting algos

- faster but much challenges
- less intuitive to write on your own
- payout is much faster

## Objectives

- understand the limitations of sorting algos we've learned so far
- implement merge sort
- implement quick sort
- implement radix sort

## Why learn this?
- sorting algos we've learned so far don't scale well. (ie 20+ items)

like take <br>
`var data = Array.apply(null, {length: 10000}).map(Function.call, Math.random)`

if you applied bubbleSort(data) it takes forever, however if we try the mergeSort(data) which we will create soon enough, it goes much faster! almost instant in comparison

## Faster sorts
- there is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)

