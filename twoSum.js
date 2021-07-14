// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log(i, j);
//         return [i, j];
//       }
//     }
//   }
// };

// twoSum([1, 5, 9], 10);

//Hashmap
/*
nums = [1,5,9]
target = 10

map={}
i=2
value=9
complement_pair = 10-9 = 1

*/

const twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const complementPair = target - value;
    if (map[complementPair] !== undefined) {
      console.log([map[complementPair], i]);
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};
twoSum([1, 5, 9], 10);
