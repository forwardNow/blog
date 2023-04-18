export default (...nums) => {
  return nums.reduce(
    (prevRes, curr) => (prevRes + curr), 0
  );
};