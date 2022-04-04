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

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

validAnagram('', '')//true

