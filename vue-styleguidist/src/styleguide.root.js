// import Vue from 'vue';

export default previewComponent => {
    return {
        data() {
            return {
                color: 'red'
            }
        },
        render(h) {
            console.log('vmOptions:', previewComponent, this)
            return h(previewComponent)
        },
    }
}
