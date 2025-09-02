const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
];

function getPassingNames(students) {
    return students
        .filter(student => student.score >= 70)
        .map(student => student.name.toUpperCase());
}
const passingNames = getPassingNames(studentScores);
console.log(passingNames);

//check array type
console.log(Array.isArray([]))
console.log(Array.isArray([1, true]))
console.log(Array.isArray("[]"))
//merge string
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3)
//convert to string
console.log(array3.toString())

const month = ['March', "Jan", "Feb"]
month.sort()
console.log(`month : ${month}`)

const array14 = [1, 30, 4, 21, 100000]
console.log(array14.sort((a, b) => a - b))

const array15 = [4, 5, 8, 1000, 30, 20000]
function comp(n1, n2) {
    return n1 - n2
}
array1.sort(comp)
console.log(array15)
//เรียงตามตัวอักษร
const stds= [
    { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
    { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
    { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
console.log(stds)
stds.sort((a,b) => a.name.localeCompare(b.name))
console.log(stds)
//เรียงตามความยาว
stds.sort((a, b) => a.name.length - b.name.length);
console.log(stds)
//เรียงแบบไม่สนใจพิมพ์ใหญ่พิมพ์เล็ก
stds.sort((a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  return nameA > nameB ? 1 : -1;
});
console.log(stds)