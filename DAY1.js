function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function myFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function myReduce(arr, callback, initialValue) {
  let total = initialValue;

  for (let i = 0; i < arr.length; i++) {
    total = callback(total, arr[i]);
  }

  return total;
}

export { myMap, myFilter, myReduce };
