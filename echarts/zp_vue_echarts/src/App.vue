
<template>
    <div class="wrap">
        <h1 id="title" v-text="msg.txt" @click="changeOpt"></h1>

        <!-- 深圳地图 -->
        <Chart :option="option" :style="size" :msg="msg"></Chart>
    </div>
</template>

<style scoped src="./static/css/app.css"></style>

<script src="./static/js/app.js"></script>

