// 规范: 参数不能与函数名一样.
var color = function (val) {
    if (val === void 0) { val = 'red'; }
    return val;
};
console.log(color());
var color2 = function (val) {
    if (val === void 0) { val = 'red'; }
    return val;
};
console.log(color2());
function color3(val) {
    if (val === void 0) { val = 'red'; }
    return val;
}
console.log(color3());
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 1));
console.log(add('1', 1));
