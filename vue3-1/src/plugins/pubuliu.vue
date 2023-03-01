<template>
    <div class="grid" :style="{
        height: '100%'
    }">
        <div :class="[ 'grid-item', 'grid-item-'+index ]" v-for="(item, index) in list" :key="index">
            {{ item.name }}
        </div>
    </div>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
    name: "masonry",

    data () {
        return {
            list: [
                { name: 'xxxxxxxx' },
                { name: '22222222' },
                { name: '33333333' },
                { name: '44444444' },
                { name: '45555555' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
                { name: '66666666' },
            ]
        }
    },

    mounted() {
        this.$nextTick( () => {
            var grid = document.querySelector('.grid');
            var msnry = new Masonry( grid, {
                // options...
                itemSelector: '.grid-item',
                columnWidth: 200
            });

                // init with selector
            var msnry = new Masonry( '.grid', {
                // options...
            });
        } )
    },
}
</script>

<style lang="less" scoped>
.grid {
    width: 100%;
    height: 100%;
    background-color: grey;

    .grid-item {
        background-color: blue;
        width: 33%;
        // float: left;
    }
    .grid-item-0 {
        // height: 10px;
    }
    .grid-item-1 {
        // height: 50px;
    }
    .grid-item-2 {
        // height: 10px;
    }
}
</style>
