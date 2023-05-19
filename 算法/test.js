function radixSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  //找到最大值
  let max = -Infinity;
  arr.forEach((el) => (el > max ? (max = el) : null));
  //求他的位数
  let digit = (max + '').length;
  //循环计数排序
  let count = [];
  for (let i = 0; i < digit; i++) {
    //按 个位排序, 十位排序 ,百位排序 ....
    arr.forEach((el) => {
      let str = el + '';
      let temp = +str[str.length - 1 - i];
      if (isNaN(temp)) {
        temp = 0;
      }
      if (Array.isArray(count[temp])) {
        count[temp].push(el);
      } else {
        count[temp] = [el];
      }
    });
    arr = [];
    count.forEach((el) => {
      if (Array.isArray(el)) {
        el.forEach((e) => {
          arr.push(e);
        });
      }
    });
    count = [];
  }
  return arr;
}

function createRandomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 10000));
  }
  return array;
}

const values = createRandomArray(100);

console.time('基数排序');
radixSort(values);
console.timeEnd('基数排序');

function countingSort(arr) {
  let count = []; //计数
  let result = []; //结果
  arr.forEach((el) => {
    //将每个数字 以索引 存入 count中
    if (!count[el]) {
      count[el] = 0;
    }
    count[el]++;
  });

  count.forEach((el, i) => {
    //将count 取出
    if (el && el > 0) {
      for (let j = 0; j < el; j++) {
        result.push(i);
      }
    }
  });
  return result;
}

console.time('计数排序');
countingSort(values);
console.timeEnd('计数排序');

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let middle = arr.splice(Math.floor(arr.length / 2), 1)[0];
  let i = 0;
  let len = arr.length;
  for (; i < len; i++) {
    const v = arr[i];
    (v >= middle ? right : left).push(v);
  }
  return quickSort(left).concat(middle, quickSort(right));
}

console.time('快速排序');
quickSort(values);
console.timeEnd('快速排序');

// function quickSort(arr: Snaps): Snaps {
//   if (arr.length <= 1) return arr;
//   let left: Snaps = [];
//   let right: Snaps = [];
//   let middle = arr.splice(Math.floor(arr.length / 2), 1)[0];
//   let i = 0;
//   let len = arr.length;
//   for (; i < len; i++) {
//     const v = arr[i];
//     (v.value >= middle.value ? right : left).push(v);
//   }
//   return quickSort(left).concat(middle, quickSort(right));
// }
