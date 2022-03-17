var twoSum = function (nums, target) {
  const previousValues = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    const neededValues = target - currentNumber
    const index2 = previousValues[neededValues]
    if (index2 != null) {
      return [index2, index]
    } else {
      previousValues[currentNumber]
    }
  }
}
const output = twoSum
console.log(twoSum)
