function dec ( target, key, dec ) {
    // 修饰类的时候, 第一个参数为 类 本身, 没有其他参数
    console.log( target, key, dec, 'decdec' );
    // => EntityCtl undefined undefined
}

function readOnly ( target, key, dec ) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    console.log( target, key, dec, 'readOnly' );
    // => EnitityCtl name dec
    dec.writable = false;
}

@dec
class EntityCtl {
    constructor () {

    }

    @readOnly
    name () {
        return `xxxx`;
    }
}

class Math {
    @log
    add( a, b ) {
        console.log( 'add' );
        return a + b;
    }
}

function log( target, name, descriptor ) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, ...arguments);
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);

window.EntityCtl = EntityCtl;
window.math = math;

export default EntityCtl;
