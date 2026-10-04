/*
    Question 1: Write deepEqual(objA, objB) that returns true if two objects have the same keys and values 
    recursively (including nested objects), without using JSON.stringify.
*/


function deepEqual(objA, objB) {
  if (objA === objB) return true;

  if (typeof objA === 'number' && typeof objB === 'number'
    && Number.isNaN(objA) && Number.isNaN(objB)) {
    return true;
  }

  if (objA === null || objB === null
    || typeof objA !== 'object' || typeof objB !== 'object') {
    return false;
  }

  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);
  if (isArrayA !== isArrayB) return false;
  if (isArrayA) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (!deepEqual(objA[i], objB[i])) return false
    }
    return true;
  }

  const isDateA = objA instanceof Date;
  const isDateB = objB instanceof Date;
  if (isDateA !== isDateB) return false;
  if (isDateA) return objA.getTime() === objB.getTime();

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false; 
  }
  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))                     // false
