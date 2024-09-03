// This file will be used to practice array questions/**
const p = console.log.bind(console);
// p(1);

// 91
// ...


// 1051 Height Checker
// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sortedHeights = heights.slice(0).sort((a, b) => a - b);
    let differences = 0;
    for (let i = 0; i < sortedHeights.length; ++i) {
        if (sortedHeights[i] !== heights[i]) {
            ++differences;
        }
    }
    return differences;
};

p(heightChecker([1, 1, 4, 2, 1, 3]));
p(heightChecker([5, 1, 2, 3, 4]));
p(heightChecker([1, 2, 3, 4, 5]));
p(
    heightChecker([
        10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
    ])
);