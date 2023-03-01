
import szChart from '../../view/szChart.vue'

import { CHINA_JSON, SZ_STATION } from '../../static/config/url.js'
import { PRO_EN, PRO_CN, PRO_NORMAL } from '../../static/config/provinces.js'

import getOpt from './charts/szOption.js'



export default {
    data() {
        return {
            msg: {
                txt: "点击这里测试(修改 option 显示隐藏地铁图)!!!"
            },
            size: {
                width: "100%",
                height: "100%"
            },
            option: undefined,
            flag: false
        }
    },
    components: {
        Chart: szChart
    },
    beforeCreate() {

        this.$http.get(SZ_STATION).then(respones1 => {

            let res = [], tep = [], data, geoCoordMap = {}, szStation;

            respones1 = respones1.body.split(" ")

            respones1.forEach((el, index) => {
                tep.push(el.trim());
                if (0 === index % 4) {
                    res.push(tep);
                    tep = [];
                }
            });
            szStation = res.slice(1);

            data = szStation.map(el => {
                return {
                    name: el[0],
                    value: PRO_NORMAL
                }
            })

            szStation.forEach(el => {
                geoCoordMap[el[0]] = [el[1], el[2]];
            })

            this.option = getOpt(data, geoCoordMap);
        })
    },
    methods: {
        changeOpt() {
            console.log('click');
            this.flag = !this.flag;
            this.bmapChange("subway", {
                visibility: this.flag ? "on" : "off"
            })
        },
        bmapChange(type, target) {
            let index = this.option.bmap.mapStyle.styleJson.findIndex(el => el.featureType === type);
            for (let key in target) {
                this.option.bmap.mapStyle.styleJson[index].stylers[key] = target[key];
            }
        }
    }
}

