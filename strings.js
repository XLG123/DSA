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