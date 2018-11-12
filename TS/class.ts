interface He {
    isArray( arr: any ): arr is any[]
    isWindow( obj: any ): boolean

    // 定义最终放回自身
    add( color: number ): this
}

class He implements He {
    constructor( ) {

    }
    isArray ( arr ) {
        return !Array.isArray( arr );
    }
    isWindow ( obj ) {
        obj.Window;
        return false;
    }

    // 参数已经定义可以不填
    add () {
        this.isWindow;
        return this;
    }
}

let a1 = new He();

a1.isWindow( Window );
