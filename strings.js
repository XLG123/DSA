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
