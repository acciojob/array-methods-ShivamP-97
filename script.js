Array.prototype.myMap = function(callback) {
  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result[result.length] = callback(arr[i], i, arr);
    }
  }

  return result;
};


Array.prototype.myFilter = function(callback) {
  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callback(arr[i], i, arr)) {
        result[result.length] = arr[i];
      }
    }
  }

  return result;
};


Array.prototype.myReduce = function(callback, initialValue) {
  const arr = this;
  let accumulator;
  let startIndex;

  if (arr.length === 0) {
    return initialValue;
  }

  if (initialValue === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  } else {
    accumulator = initialValue;
    startIndex = 0;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};

module.exports = Array.prototype;
