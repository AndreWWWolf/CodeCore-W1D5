const arrayUtils = {
    last: function(arr) {
        return arr[arr.length - 1];
    },
    first: function(arr) {
        return arr[0];
    },
    take: function(arr, n) {
        arr.slice(0, n);
    }
};

const testArray = [1,2,3,4];

const last = arrayUtils.last(testArray);
console.log(last);
const first = arrayUtils.first(testArray);
console.log(first);
const take = arrayUtils.take(testArray, 3);
console.log(take);



//function that turns a 2D array into an object

function toObject(arr) {
    const obj = {};
    for (const pair of arr) {
        obj[pair[0]] = pair[1];
    }
    return obj;
}
arrayUtils.toObject = toObject;
const twoDArray = [['a', 1], ['b', 2], ['c', 3]];
const newObject = arrayUtils.toObject(twoDArray);
console.log(newObject)