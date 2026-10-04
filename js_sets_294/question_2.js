/**
    Question 2: Write diffObjects(oldObj, newObj) that returns an object describing what 
    changed: { added: {...}, removed: {...}, changed: {...} }, comparing only top-level keys.
 */
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  const oldKeys = Object.keys(oldObj);
  const newKeys = Object.keys(newObj);

  for (const key of oldKeys) {
    if (!Object.prototype.hasOwnProperty.call(newObj, key)) {
      removed[key] = oldObj[key];
    } else if (!Object.is(oldObj[key], newObj[key])) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    } 
  }

  for (const key of newKeys) {
    if (!Object.prototype.hasOwnProperty.call(oldObj, key)) {
      added[key] = newObj[key]
    }
  }

  return { added, removed, changed }
}
console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
