
import { COLORS } from '../config/constant.js'

export default {

    /**
     * 根据人流量返回对应颜色值
     * @param {Number} val
     */
    getColor(val) {
        if (val > 0 && val <= 700) {
            return COLORS[3];
        } else if (val > 700 && val <= 1400) {
            return COLORS[2];
        } else if (val > 1400 && val <= 2100) {
            return COLORS[1];
        }
        return COLORS[0];
    }
}