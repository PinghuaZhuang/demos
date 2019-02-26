const cancelable = Symbol( 'cancelable' )

/**
 * @abstract
 * @class
 * @module AbstractEvent
 */
export default class AbstractEvent {

    // 事件类型
    static type = 'event'

    // 是否取消冒泡
    static cancelable = false

    /**
     * @param { Object } data Event data
     */
    constructor ( data ) {
        this[ cancelable ] = false
        this.data = data
    }

    /**
     * 获取视角类型
     */
    get type () {
        return this.constructor.type
    }

    /**
     * 取消冒泡
     */
    cancel () {
        this[ cancelable ] = true
        return this
    }

    /**
     * 是否已经取消冒泡
     */
    cancelabled () {
        return !Boolean( this[ cancelable ] )
    }

    /**
     * 根据 cancelable 属性设定是否取消冒泡
     * @param { ElementEvent } event
     */
    setCancelable ( event ) {
        if ( this[ cancelable ] ) {
            event.stopPropagation()
        }
        return this
    }
}
