
const studentScores = [
  { name: 'Non', score: 95 },
  { name: 'Jin', score: 67 },
  { name: 'Mai', score: 80 },
  { name: 'Beam', score: 59 },
  { name: 'Ann', score: 72 },
];


function getPassingNames(students) {
  return students
    .filter(student => student.score >= 70)
    .map(student => student.name.toUpperCase());
}

const passingNames = getPassingNames(studentScores);
console.log("Passing students:", passingNames);


console.log(Array.isArray([]));          // true
console.log(Array.isArray([42, false])); // true
console.log(Array.isArray("[]"));        // false


const array1 = ["x", "y", "z"];
const array2 = ["p", "q", "r"];
const array3 = array1.concat(array2);
console.log("Concat:", array3);
console.log("To string:", array3.toString());


const month = ['Dec', "Jan", "Feb", "Oct"];
month.sort();
console.log("Month:", month);


const nums1 = [20, 1, 100, 35, 4];
console.log("Number sort:", nums1.sort((a, b) => a - b));


const nums2 = [500, 12, 3, 45, 8];
function comp(n1, n2) {
  return n1 - n2;
}
nums2.sort(comp);
console.log("Compare sort:", nums2);

const stds = [
  { id: 1, name: "Somchai", email: "somchai@sit.kmutt.ac.th" },
  { id: 2, name: "Ann", email: "ann@sit.kmutt.ac.th" },
  { id: 3, name: "john", email: "john@sit.kmutt.ac.th" },
  { id: 4, name: "Sudarat", email: "sudarat@sit.kmutt.ac.th" },
];

console.log("Original:", stds);

// เรียงตามตัวอักษร
stds.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sort by name:", stds);

// เรียงตามความยาวชื่อ
stds.sort((a, b) => a.name.length - b.name.length);
console.log("Sort by length:", stds);

// เรียงโดยไม่สนใจพิมพ์ใหญ่เล็ก
stds.sort((a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  return nameA > nameB ? 1 : -1;
});
console.log("Sort ignore case:", stds);