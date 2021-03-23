export default function orderByProps(obj, order) {
  const arr = [];
  const orderArr = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key !== order[0] && key !== order[1]) {
      arr.push({ key, value });
    } else {
      orderArr.push({ key, value });
    }
  }

  arr.sort((a, b) => {
    const keyA = a.key;
    const keyB = b.key;
    if (keyA < keyB) { return -1; }
    if (keyA > keyB) { return 1; }
    return 0;
  });

  const result = orderArr.concat(arr);

  return result;
}
