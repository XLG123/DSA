// 14
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; ++i) {
        const word = strs[i];
        for (let j = 0; j < commonPrefix.length; ++j) {
            if (commonPrefix[j] !== word[j]) {
                commonPrefix = commonPrefix.slice(0, j);
                break;
            }
        }
    }
    return commonPrefix;
};



// 187
// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    // // Solution 1
    // let seq = "";

    // let sequenceCount = {};

    // for (let i = 0; i < s.length - 9; ++i) {
    //     seq += s[i];
    //     for (let j = i + 1; j < i + 10; ++j) {
    //         seq += s[j];
    //     }

    //     if (!sequenceCount[seq]) {
    //         sequenceCount[seq] = 1;
    //     } else if (sequenceCount[seq]) {
    //         sequenceCount[seq] += 1;
    //     }

    //     seq = "";
    // }

    // const repeatedSeq = Object.entries(sequenceCount)
    //     .filter((seq) => seq[1] > 1)
    //     .map((seq) => seq[0]);

    // return repeatedSeq;

    // Solution 2
    let allSeq = new Set();
    let repeatedSeq = [];

    let i = 0;
    let seq = "";
    while (i < s.length - 9) {
        seq = s.substring(i, i + 10);
        if (allSeq.has(seq)) {
            if (!repeatedSeq.includes(seq)) {
                repeatedSeq.push(seq);
            }
        } else {
            allSeq.add(seq);
        }
        ++i;
    }
    return repeatedSeq;
}



// 434
// Example 1:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
// Input: s = "Hello"
// Output: 1
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (!s) {
        return 0;
    }
    
    const segments = s.split(" ");

    let count = 0;
    for (let i = 0; i < segments.length; ++i) {
        if (segments[i] !== "") {
            ++count;
        }
    }

    console.log(segments);

    return count;
};



// 387
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    s.split("").forEach((char) => {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    })

    let letter = "";
    const arr = Object.entries(obj);
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i][1] === 1) {
            letter = arr[i][0];
            break;
        }
    }

    if (letter) {
        return s.indexOf(letter);
    } else {
        return -1;
    }
};