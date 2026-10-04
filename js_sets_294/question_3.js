
/**
    Question 3: Object.freeze only freezes the top level. Write deepFreeze(obj) that recursively freezes an object 
    and all of its nested objects, then returns it.
*/
function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  Object.values(obj).forEach(value => {
    deepFreeze(value);
  });

  return Object.freeze(obj);
}
  
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // ignored
config.debug = true                        // ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true