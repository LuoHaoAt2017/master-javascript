// 真题描述： 
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 所有求和的问题都可以转化成求差的问题

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

const nums = [15, 7, 7, 11, 2];
const target = 26;

// 时间复杂度：O(n*n)
// 空间复杂度：O(1)
// 当发现自己的代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环。
function sum_of_two_numbers(nums, target) {
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        const another = target - nums[i];
        if (another < 0) {
            continue;
        }
        for(let j = i+1; j < len; j++) {
            if (another === nums[j]) {
                return [i, j];
            }
        }
    }
    return [];
}

// 时间复杂度：O(n)
// 空间复杂度：O(n)
function total_of_double_numbers(numbers, target) {
    let map = new Map();
    const len = numbers.length;
    for(let i = 0; i < len; i++) {
        const elem = numbers[i];
        const another = target - elem;
        if (map.has(another)) {
            return [map.get(another), i];
        } 
        map.set(elem, i);
    }
    return [];
}

const list = total_of_double_numbers(nums, target);
console.log(list.join(','));
