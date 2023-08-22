const twoSum = (nums, target) => {
  const seen = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const search = target - nums[i];
    
    if (seen.has(search) {
      return [i, seen.get(search)];
    }

    seen.set(nums[i], i);
  }
};
