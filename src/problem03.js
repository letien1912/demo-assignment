function isAvailableArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

const createEmptyArrayByZero = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const arrRow = [];
    for (let j = 0; j < len; j++) {
      arrRow.push(0);
    }
    arr.push(arrRow)
  }
  return arr;
};

/*
*     1 2 3
*
* 1   0 1 1
* 2   0 0 1
* 3   0 0 0
*
* */
const initDirectionArray = (len, edges) => {
  const arr = createEmptyArrayByZero(len);
  for (let i = 0; i < edges.length; i++) {
    arr[edges[i][0] - 1][edges[i][1] - 1] = 1
  }
  return arr;
};

const resetCheckingArray = (len) => {
  let check = [];
  for (let j = 0; j < len; ++j) {
    check.push(0);
  }
  return check;
};

const problem03 = (weights, edges) => {
  if (!isAvailableArray(weights)) return 0;
  if (!isAvailableArray(edges)) return 0;

  const weightLen = weights.length;
  const stack = [];
  let check = [];
  const direction = initDirectionArray(weightLen, edges);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < weightLen; ++i) {
    sum = weights[i];
    // reset
    check = resetCheckingArray(weightLen);
    stack.push(i);

    // Marked points went through
    check[i] = 1;

    while (stack.length > 0) {
      const current = stack.pop();
      for (let k = 0; k < weightLen; ++k) {
        if (direction[current][k] === 1 && check[k] === 0) {
          check[k] = 1;
          stack.push(k);
          sum += weights[k];
        }
      }

    }

    result = Math.max(sum, result)
  }

  return result;
};
module.exports = problem03;