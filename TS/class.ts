interface Person3 {
    name: string
}

interface He {
    // isArray( arr: any ): arr is Array<any>
    // isWindow( obj: any ): obj is Window

    // 实现的时候可以不定义参数类型|不传递参数
    // 传递的参数需要定义, 必须满足接口定义的类型
    add( color: Person3 ): this
}

class HeImpl implements He {
    constructor( ) {

    }
    // isArray ( arr: any ) {
    //     return Array.isArray( arr );
    // }
    isWindow ( obj: any ) {
        return typeof obj === 'object' && obj.Window === obj;
    }

    add ( p ) {
        this.isWindow;
        return this;
    }
}

let a1 = new HeImpl();

a1.add( 1 );

a1.isWindow( Window );
