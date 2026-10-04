/**
    Question 5: Write validateSchema(obj, schema) where schema maps each key to an expected typeof string 
    (e.g. { name: 'string', age: 'number' }). Return an array of error messages for missing keys or type mismatches; 
    return an empty array if valid.
*/

function validateSchema(obj, schema) {
  const errors = [];

  for (const key in schema) {
    const expectedType = schema[key];

    if (!(key in obj)) {
      errors.push(`$(key): missing property`);
    } else {
      const actualType = typeof obj[key];
      if (actualType !== expectedType) {
        errors.push(
          `$(key): expected ${expectedType}, got ${actualType}`
        );
      }
    }
  }
  return errors;
}
const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']