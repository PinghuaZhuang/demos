<template>
    <div class="data">
        <h1>{{ msg }}</h1>
        <h1>{{ obj.jb }}</h1>
    </div>
</template>

<script>
export default {
    name: 'data',
    props: [ 'obj' ],
    data: () => ( {
        msg: 'lsakjflaskfj'
    } ),

    watch: {
        obj ( val ) {
            console.log( 'obj:', val );
        },

        // 监听不到的
        'obj.jb' ( val ) {
            console.log( 'obj.jb:', val );
        }
    },

    render () {
        return <div>color</div>
    }
};
</script>
