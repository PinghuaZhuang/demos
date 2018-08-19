function ZP ( name ) {
    this.name = name;
}

let obj = new ZP();

let flag = obj.__proto__ === ZP.prototype;

console.log( 'flag:', flag );
