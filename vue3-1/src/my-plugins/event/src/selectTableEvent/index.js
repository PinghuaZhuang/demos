import { AbstractEvent } from '../AbstractEvent'

export default class SelectTableEvent extends AbstractEvent {
    static type = 'select-table'

    get startPoint () {
        return this.data.startPoint
    }

    get endPoint () {
        return this.data.endPoint
    }
}
