//Given two Stringd, write a function to determine if 2nd string is an anagram of the first
//ie cinema is an anagram of iceman

//examples:
//validAnagram('', '') true
//validAnagram('aaz', 'zza') false
//validAnagram('anagram', 'nagaram') true
//validAnagram('rat', 'car') false
//validAnagram('awesome', 'awesom') false
//validAnagram('qwerty', 'qeywrt') true

//assume all input contains only lowercase alphabet characters

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 3, n: 1, g: 1, r: 1, m: 1, s:1}
validAnagram('anagram', 'nagaram')

validAnagram('', '')//true

// The first loop is a breakdown of the first String, and put into a lookup Object.
//If it already exists increment to get the count, otherwise initialize with a default value of 1.
// The 2nd loop goes through our loopup object, and checks to see if it's in the lookUp object, and if it isn't return false, if it is, decrement
// if we search through with a letter from second and the letter is already at 0, we also return false
