/**
    Question 4: Write createCounter() that returns an object with increment(), decrement(), and value as a getter 
    (not a plain property), keeping the internal count truly private via closure.
*/

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get value() {
      return count;
    }
  };
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible