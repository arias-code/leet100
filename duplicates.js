const containsDuplicates = (nums) => {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    if (!seen[nums[i]) {
      seen[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
}
