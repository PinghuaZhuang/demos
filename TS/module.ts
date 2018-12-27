// 可以多次命名
// 不能再 declare 中使用, 把 declare 删除就可以
module Validation {
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable ( s: string ) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
// <reference path="Validation.ts" />
module Validation {
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable ( s: string ) {
            return lettersRegexp.test(s);
        }
    }
}

module Validation {
    export interface StringValidator {
        isAcceptable( s: string ): boolean;
    }
}
