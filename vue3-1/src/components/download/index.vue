<template>
    <div class="downloadxxxxxx">
        <el-button type="primary" @click="handleDownload">1111111111111111111111</el-button>
        <Download :href="imgUrl" label="ni hao" image></Download>
    </div>
</template>

<script>
import Download from './download'

export default {
    name: 'download-demo',
    components: {
        Download,
    },

    data () {
        return {
            imgUrl: 'https://ae01.alicdn.com/kf/H5858f2ff81c24da2bb699660ef3c0d12I.jpg'
        }
    },

    methods: {
        handleDownload () {

        }
    }
}
</script>
