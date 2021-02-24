export default function orderByProps(obj, order) {
  const modifiedArr = Object.entries(obj);
  const resultArr = [];
  modifiedArr.forEach((e) => {
    const key = '';
    const value = '';
    const resultObj = { key, value };
    resultObj.key = e[0];
    resultObj.value = e[1];
    resultArr.push(resultObj);
  });

  const orderArr = [];
  order.forEach((e) => {
    const value = resultArr.find((element) => element.key === e);
    orderArr.push(value);
  });

  const spliceArr = resultArr.slice();

  resultArr.forEach((item, i) => {
    for (let j = 0; j < order.length; j++) {
      if (item.key === order[j]) {
        if (j === 1) {
          i -= 1;
        }
        spliceArr.splice(i, 1);
      }
    }
  });


  spliceArr.sort((a, b) => {
    const keyA = a.key; 
    const keyB = b.key;
    if (keyA < keyB) { return -1; }
    if (keyA > keyB) { return 1; }
    return 0;
  });


  for (let j = 1; (j < orderArr.length && j >= 0); j--) {
    spliceArr.unshift(orderArr[j]);
  }
  return spliceArr;
}
