let first = { a: 1, b: 3, };
let second = { a: 1, b: 3, };
let com1 = first;
let com2 = second
if (com1 !== com2) {
    console.log('The condition almost done --True ');
} else {
    console.log('Nothing to do more-- False');
}


const first2 = { a: 1, b: 2, c: 3, d: 4 };
const second2 = { a: 1, c: 3, d: 4, b: 2 };

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true
}
const result = compareObjects(first2, second2);
console.log(result);