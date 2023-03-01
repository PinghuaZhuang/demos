
import { CHINA_JSON, SZ_STATION } from '../../config/url.js'
import { PRO_EN, PRO_CN, PRO_NORMAL } from '../../config/provinces.js'

import getOpt from './szOption.js'

let szChart;

export default {
    data() {
        return {
            szChart: undefined
        }
    },
    props: ["option", "msg"],
    mounted() {

        // 图表初始化
        this.szChart = this.echarts.init(this.$el.querySelector("#szChart"));
    },
    watch: {
        option: {
            handler: function (val, oldVal) {
                this.szChart.setOption(val);
                window.onresize = this.szChart.resize;
                // console.log('changed=====', this.szChart.getModel().getComponent('bmap').getBMap());
                // console.log(val.series, this.szChart._api.getOption(), this.szChart);
            },
            deep: true
        }
    }
}