// let objA = {a: 1, b: 2}
// let objB = {c: 3, d:4}
// let objC = Object.assign(objA, objB);

// console.log(objC);

function merge(objA, objB) {
    const mergeObj = {};
    for (let key in objA) {
      mergeObj[key] = objA[key];
    }
    for (let key in objB) {
      mergeObj[key] = objB[key];
    }
    return mergeObj;
  }

  const objA = {
      name: 'Andrew', 
      message: 'Food is Good'
  }
  const objB = {
      sname: 'Shannon',
      smessage: 'Sand is brown'
  }
  console.log(merge(objA, objB));