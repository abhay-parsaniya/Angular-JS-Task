// Create Prototype function

Array.prototype.arrayDouble = function () {
  return this.map((num) => num * 2);
};

const nums = [1, 2, 3, 4];

console.log(nums.arrayDouble());