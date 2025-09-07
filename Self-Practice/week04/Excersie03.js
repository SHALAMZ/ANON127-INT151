const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

function isMoreThanFive(value) {
    return value > 5;
}
const filterNums = [12, 5, 8, 130, 44].filter(isMoreThanFive);
console.log(filterNums);

const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeNums = nums.filter(function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
});
console.log(primeNums);

function wordLengthMax6(word) {
  return word.length <= 6;
}
const fruits = ['mango','apple','mangosteen','orange','mangoes'];
const shortWords = fruits.filter(wordLengthMax6);
console.log(shortWords); 

const evenIds = students
  .filter(s => s.id % 2 === 0)
  .map(s => s.id);
console.log(evenIds);

const a = [5, 12, 8, 130, 44];
console.log(a.find(x => x > 10));      // 12
console.log(a.findIndex(x => x > 13));