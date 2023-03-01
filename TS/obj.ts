interface Person {
    name: string,
    sayHello( str: string ): this
}

let obj: Person = {
    name: 'xxx',
    sayHello ( str: string ) {
        return this;
    }
}

class PersonImpl implements Person {
    constructor(  ) {

    }

    public name!: string

    public sayHello ( str: string ) {
        return this
    }
}

// obj 不是 PersonImpl 的实例

let obj2: {
    name: string
} = {
    name: 'xxx'
}
