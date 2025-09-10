function addProperty(obj,key,value){
    obj[key]=value
    return obj;
}
console.log(addProperty({name:'john'},'age',25))
console.log(addProperty({id:123},'born','bangkok'))

function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(mergeObject({name:'John',age:25},{city:'New York'}))


function getFreqOfWords(sentence){
    if (sentence == null) return undefined
    let words =sentence.toLowerCase().split(" ")
    let freq = {};
    for (let word of words){
        if(freq[word]){
            freq[word] += 1
        } else {
            freq[word] =1
        }
    }
    return freq
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords(null))

function extraAndRename(obj){
    const { name , age} = obj
    return {
        fullname: name,
        YearOld:age
    }
}
console.log(extraAndRename({name:'John',age:25},{city:'New York'}))
 
function mergeAndDestructure(obj1,obj2){
    const merged = { ...obj1,...obj2}
    const { name , age } = merged
    return { name , age}
}
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }));

function removeDuplicateWords(sentence){
    if (sentence === null || sentence === "" ) return "";
    let words = sentence.split(" ")
    console.log(words);
    let seen = new Set()
    let result = []
    for ( let word of words){
        let lowerWord = word.toLowerCase()
        if(!seen.has(lowerWord)){
            seen.add(lowerWord)
            result.push(word)
        }
    }
    return result.join(" ")
}
console.log(removeDuplicateWords("This is a test This test is easy."))
console.log(removeDuplicateWords(""))
console.log(removeDuplicateWords(null)); 

function findValue(arr){
    if (!arr || arr.length ===0){
        return {min:null,max:null,sum:0,avg:0}
    }
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let sum = arr.reduce((acc,num) => acc+num,0)
    let avg = sum / arr.length

    return { min , max ,sum ,avg}
}
console.log(findValue([1,2,3,4,5]))

function convertToUppercase(arr) {
    return arr.map(word => word.toUpperCase());
}
console.log(convertToUppercase(['hello', 'world']));

function findMax(arr) {
    return arr.reduce((max,num) => { return num > max ? num :max})
}
console.log(findMax([1, 2, 3, 4]));  

function removeFalsyValues(arr) {
    if (!arr || arr.length === 0) return [];
    return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3]));
console.log(removeFalsyValues(['a', '', 'b', null, 'c']));
console.log(removeFalsyValues([null, undefined, 'A']));

function doubleAndFilterEvenNumbers(arr) {
    if (!arr || arr.length === 0) return [];
    return arr
        .filter(num => num % 2 === 0)   // เก็บเฉพาะเลขคู่
        .map(num => num * 2);           // คูณสอง
}
console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]));
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]));
console.log(doubleAndFilterEvenNumbers([]));

function filterEvenNumbers(arr) {
    if (!arr || arr.length === 0) return [];
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4]));

function populateArray(length, value) {
    if (length <= 0) return [];
    return Array(length).fill(value);
}
console.log(populateArray(3, 'a'));

function squareNumbers(arr) {
    if (!arr || arr.length === 0) return [];
    return arr.map(num => num * num);
}
console.log(squareNumbers([1, 2, 3, 4]));

function processNumbers(arr) {
    if (!arr || arr.length === 0) return 0;

    return arr
        .map(num => num * num)           // ขั้นที่ 1: ยกกำลังสอง
        .filter(square => square % 2 !== 0) // ขั้นที่ 2: เอาเฉพาะเลขคี่
        .reduce((sum, num) => sum + num, 0); // ขั้นที่ 3: รวมผลบวก
}

console.log(processNumbers([1, 2, 3, 4]));