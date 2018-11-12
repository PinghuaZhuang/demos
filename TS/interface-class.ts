interface Entity {
    name: string
}

interface EntityIt {
    // 接口定义的属性都是 public 的
    name: string

    add( entity: Entity ): EntityCtl
    show()
    hide()
}

class EntityCtl implements EntityIt {
    constructor( name: string ) {
        let entity: Entity = {
            name: 'xxxx'
        }

        console.log( this.entity );
        this.name = name;
    }

    private entity!: Entity

    name: string

    add ( entity: Entity ) {
        return this;
    }
    show() {

    }
    hide() {

    }
}

let a = new EntityCtl( 's' );
let b: Entity = {
    name: 'ppp'
}

a.add( b );
a.name = '1';

class Vide extends EntityCtl {
    constructor ( name: string ) {
        super( name )
    }
}
