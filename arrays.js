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
var intersect = function(nums1, nums2) {
    let map = {};
    for (const num of nums1) {
        if (nums2.includes(num)) {
            if (!map[num]) {
                map[num] = 1;
                const beforeNum = nums2.slice(0, nums2.indexOf(num));
                const afterNum = nums2.slice(nums2.indexOf(num)+1, nums2.length);
                nums2 = beforeNum.concat(afterNum);
            } else {
                ++map[num];
            }
        }
    }
    
    let result = [];
    Object.entries(map).forEach(([key, val]) => {
        for (let i = 0; i < val; ++i) {
            result.push(parseInt(key));
        }
    });

    return result;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
p(intersect(nums1, nums2)); // Output: [2, 2]

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
p(intersect(nums1, nums2)); // Output: [4, 9]

nums1 = [1, 2, 2, 1];
nums2 = [2];
p(intersect(nums1, nums2)); // Output: [2]

nums1 = [1, 2];
nums2 = [1, 1];
p(intersect(nums1, nums2)); // Output: [1]

nums1 = [3, 1, 2];
nums2 = [1, 1];
p(intersect(nums1, nums2)); // Output: [1]



// 268
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sorted = nums.sort((a, b) => (a-b));
    const sortedSize = sorted.length;
    const max = sorted[sortedSize - 1];

    if (sortedSize > max) {
        return sortedSize;
    } else if (sortedSize === max && sorted[0] !== 0) {
        return 0;
    }

    for (let i = 1; i < sortedSize; ++i) {
        if (sorted[i] !== i) {
            return i;
        }
    }
};



// 283
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let low = 0;
    let high = low + 1;

    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        }
    }
};