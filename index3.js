// var twoSum = function (nums, target) {
//   const previousValues = {}
//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i]
//     const neededValues = target - currentNumber
//     const index2 = previousValues[neededValues]
//     if (index2 != null) {
//       return [index2, index]
//     } else {
//       previousValues[currentNumber]
//     }
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // loop over nums array
  // for each element in nums, loop over nums again
  // check if current element + inner loop element === target
  // if true, return array with index of current element and
  // index of inner loop element
  // make sure not to use same element twice
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue
      } else if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([0, 1, 2, 6, 5, 7], 9))
