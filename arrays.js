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
// var heightChecker = function(heights) {
//     let sortedHeights = heights.slice(0).sort((a, b) => a - b);
//     let differences = 0;
//     for (let i = 0; i < sortedHeights.length; ++i) {
//         if (sortedHeights[i] !== heights[i]) {
//             ++differences;
//         }
//     }
//     return differences;
// };

// p(heightChecker([1, 1, 4, 2, 1, 3]));
// p(heightChecker([5, 1, 2, 3, 4]));
// p(heightChecker([1, 2, 3, 4, 5]));
// p(
//     heightChecker([
//         10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
//     ])
// );



// 1089
// Example 1:
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:
// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// var duplicateZeros = function(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] === 0) {
//             arr.splice(i, 0, 0);
//             arr.pop();
//             ++i;
//         }
//     }
// };

// let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// duplicateZeros(arr);
// p(arr);

// arr = [1, 2, 3];
// duplicateZeros(arr);
// p(arr);



// 349
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     let result = [];
//     for (const num of nums1) {
//         if (nums2.includes(num) && !result.includes(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// };

// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2];
// p(intersection(nums1, nums2));

// nums1 = [4, 9, 5];
// nums2 = [9, 4, 9, 8, 4];
// p(intersection(nums1, nums2));



// 350
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersectHelper = (arr1, arr2) => {
    let output = [];
    for (const el of arr1) {
        if (arr2.includes(el)) {
            output.push(el);
        }
    }
    return output;
}

var intersect = function(nums1, nums2) {
    let result = [];
    if (nums1.length <= nums2.length) {
        result = intersectHelper(nums1, nums2);
    } else if (nums1.length > nums2.length) {
        result = intersectHelper(nums2, nums1);
    }
    return result;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
p(intersect(nums1, nums2));

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
p(intersect(nums1, nums2));

nums1 = [1, 2, 2, 1];
nums2 = [2];
p(intersect(nums1, nums2));

nums1 = [1, 2];
nums2 = [1, 1];
p(intersect(nums1, nums2));

nums1 = [3, 1, 2];
nums2 = [1, 1];
p(intersect(nums1, nums2));