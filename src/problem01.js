
const problem01 = (arr, k) => {
  k%=4; // maximum 4 cases
  let res = arr;
  while(k-- > 0) {
    let newArr = res;
    res = [];
    const colLen = newArr.length;
    const rowLen = newArr[0].length;
    for(let i = 0; i < rowLen; ++i) {
      const tempArr = [];
      for(let j = 0; j < colLen; ++j) {
        tempArr.push(newArr[j][i])
      }
      res.push(tempArr.reverse())
    }
  }
  return res;
};
module.exports = problem01;