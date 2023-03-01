<template>
    <el-container :style="{
        height: '80%',
        width: '100%',
    }" >
        <el-aside width="201px" >
            <el-menu class="el-menu-vertical-demo wrap"
                :collapse="isCollapse" default-active="0" @open="handleOpen" @close="handleClose">
                <el-menu-item v-for="(item, index) in menus" :key="index" :index="index+''">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-button class="arrow" @click="isCollapse=!isCollapse">
                    <i :class="[{
                        'el-icon-d-arrow-right': isCollapse,
                        'el-icon-d-arrow-left': !isCollapse
                    }]"></i>
                </el-button>
                <!-- <i class="el-icon-d-arrow-right arrow"></i> -->
            </el-menu>
        </el-aside>
        <el-main>
            <el-button @click="isCollapse=!isCollapse" round>xxxx</el-button>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'Transiton',
    data () {
        return {
            menus: new Array( 5 ).fill( 1 ),
            isCollapse: true,
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
    // float: left;
}
.el-menu-vertical-demo {
    /deep/ .el-menu-item {
        text-align: left;
        margin-right: 10px;
        border-right: solid 1px #e6e6e6;
    }
}
.arrow {
    position: absolute;
    right: 0;
    top: 0px;
    padding: 0;
    width: 24px;
    height: 16px;
    font-size: 12px;
    // border-style: none;
}

.el-menu-vertical-demo.el-menu--collapse {
    // .wrap {
    //     overflow: visible;
    // }
}

.wrap {
    position: relative;
    left: 0;
    top: 0;
    font-size: 20px;
    border: none;
    // overflow: visible!important;
    // padding-right: 20px;
    // height: 100%;
}
</style>
