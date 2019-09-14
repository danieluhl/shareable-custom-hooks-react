const { test, expect } = require('../utils')
/*

  INSTRUCTIONS
  1. Write this function based on the information provided.
  2. Test your function with node by running `node index.js`
  3. Make sure all tests pass.

*/

/**
 *
 * @param {number} initialValue
 * @returns {[{value: number}, (newValue: number) => void]} an array containing the value and a function to update the value
 */
function useCount(initialValue) {
  // set initial value
  let count = { value: initialValue };
  // ability to update the value
  const setCount = (value) => count.value = value;
  return [count, setCount];
}

test('useCount - returns an array with a value and a function to update the value', () => {
  const [count, setCount] = useCount(0)
  console.log(count.value);

  expect(typeof count, 'object', 'count is an object')
  expect(
    count.hasOwnProperty('value'),
    true,
    'count has a property called "value"'
  )
  expect(Object.keys(count).length, 1, 'count only has one property')
  expect(count.value, 0, 'count.value returns 0')
  expect(typeof setCount, 'function', 'setCount is a function')
})

test('useCount - the count value can be updated', () => {
  const [count, setCount] = useCount(1)

  expect(count.value, 1, 'initializing the value works')

  setCount(5)
  expect(count.value, 5, 'setCount will update the value')
})
