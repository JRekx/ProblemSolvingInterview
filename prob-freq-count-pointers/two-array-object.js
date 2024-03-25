/**
 * Creates an object from two arrays, where the keys are the items in the first array and the values are the items at the same index in the second array. If the second array is shorter than the first, null is used as the value for additional keys.
 *
 * @param {string[]} keys - The array of keys
 * @param {*[]} values - The array of values
 * @returns {Object} An object with the keys and values paired at each index
 */
// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}
