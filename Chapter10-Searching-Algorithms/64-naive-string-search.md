# Naive String Search

- suppose want to count number of times a smaller string appears in a longer string
- straightforward approach involves checking pairs of characters individually

long string: `wowomgzomg`

short string: `omg`

Pseudocode:

- loop over longer string
- loop over shorter string
- if characters don't match, break out of inner loop
- if characters do match, keep going
- if you complete inner loop and find a match, increment count of matches
- return count

# Implementation

```
function naiveSearch(lomg, short){
    for(let i = 0; i < long.length; i++){
        console.log(i)
        for(let j = 0l j < short.length; j++){
            console.log("i: ", i, long[i],"j: ", j, short[j])
        }
    }
}

naiveSearch("lorie loled", "lol")
```

if we find a match of the first 1, we're going to look ahead at the next one to see if it's also a match, otherwise breakout

```
function naiveSearch(lomg, short){
    for(let i = 0; i < long.length; i++){
        console.log(i)
        for(let j = 0l j < short.length; j++){
            console.log("i: ", i, long[i],"j: ", j, short[j])
            if(short[j] !== long[i+j]){
                console.log("BREAK!")
                break;
            }
        }
    }
}

naiveSearch("lorie loled", "lol")
```

still not incrementing a count when found full match. Lets fix that.

define a var called **count**
and set a condition to increment it.
One way we can tell we got a hit, is if j makes it to the end of our target string or short string.

```
function naiveSearch(lomg, short){
    for(let i = 0; i < long.length; i++){
        let count = 0;
        for(let j = 0l j < short.length; j++){
            console.log("i: ", i, long[i],"j: ", j, short[j])
            if(short[j] !== long[i+j]){
                console.log("BREAK!")
                break;
            }
            if(j === short.length - 1) {
                console.log("Found one!")
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
```