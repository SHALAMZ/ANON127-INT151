console.log(getFreqOfWords('Today is present and present is your gift'))
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'))
// { do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null))
// undefined
console.log(getFreqOfWords(undefined))
// undefined
function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {

        return undefined

    }

    let words = sentence.toLowerCase().split(" ")

    let Obj = {}

    for (let word of words) {

        if (Obj[word]) {

            Obj[word] += 1

        } else {

            Obj[word] = 1

        }

    }

    return Obj

}



// การบ้าน

function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {
        return undefined
    }

    let words = sentence.toLowerCase().split(" ")

    let Obj = {}

    for (let word of words) {
        if (Obj[word]) {
            Obj[word] += 1
        } else {
            Obj[word] = 1
        }
    }

    return Obj
}

console.log(getFreqOfWords('Today is present and present is your gift'))
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }

console.log(getFreqOfWords('Do you best just do it'))
// { do: 2, you: 1, best: 1, just: 1, it: 1 }

console.log(getFreqOfWords(null))
// undefined

console.log(getFreqOfWords(undefined))
// undefined
