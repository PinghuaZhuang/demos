/**
 * 一下数据假定, 并不是真实值;
 * red: 拥挤, >200 人
 * yellow: 比较拥挤, 700-1400 人
 * green: 舒适, 0-700 人
 */
export const COLORS = ["black", "red", "yellow", "green"];


/**
 * OD 数据
 * value: 代表的人流量
 */
export const PERSON_COUNT = [
    {
        "fromName": "安托山",
        "toName": "福田",
        "coords": [[114.012878, 22.554987], [114.059788, 22.546125]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "安托山",
        "toName": "华强北",
        "coords": [[114.012878, 22.554987], [114.091912, 22.550317]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "安托山",
        "toName": "黄贝岭",
        "coords": [[114.012878, 22.554987], [114.143367, 22.552417]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "安托山",
        "toName": "上梅林",
        "coords": [[114.012878, 22.554987], [114.066108, 22.576135]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "福田",
        "toName": "安托山",
        "coords": [[114.059788, 22.546125], [114.012878, 22.554987]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "福田",
        "toName": "华强北",
        "coords": [[114.059788, 22.546125], [114.091912, 22.550317]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "福田",
        "toName": "黄贝岭",
        "coords": [[114.059788, 22.546125], [114.143367, 22.552417]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "福田",
        "toName": "上梅林",
        "coords": [[114.059788, 22.546125], [114.066108, 22.576135]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "华强北",
        "toName": "安托山",
        "coords": [[114.091912, 22.550317], [114.012878, 22.554987]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "华强北",
        "toName": "福田",
        "coords": [[114.091912, 22.550317], [114.059788, 22.546125]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "华强北",
        "toName": "黄贝岭",
        "coords": [[114.091912, 22.550317], [114.143367, 22.552417]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "华强北",
        "toName": "上梅林",
        "coords": [[114.091912, 22.550317], [114.066108, 22.576135]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "黄贝岭",
        "toName": "安托山",
        "coords": [[114.143367, 22.552417], [114.012878, 22.554987]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "黄贝岭",
        "toName": "福田",
        "coords": [[114.143367, 22.552417], [114.059788, 22.546125]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "黄贝岭",
        "toName": "华强北",
        "coords": [[114.143367, 22.552417], [114.091912, 22.550317]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "黄贝岭",
        "toName": "上梅林",
        "coords": [[114.143367, 22.552417], [114.066108, 22.576135]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "上梅林",
        "toName": "安托山",
        "coords": [[114.066108, 22.576135], [114.012878, 22.554987]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "上梅林",
        "toName": "福田",
        "coords": [[114.066108, 22.576135], [114.059788, 22.546125]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "上梅林",
        "toName": "华强北",
        "coords": [[114.066108, 22.576135], [114.091912, 22.550317]],
        "value": Math.random() * 2500 + 1
    }, {
        "fromName": "上梅林",
        "toName": "黄贝岭",
        "coords": [[114.066108, 22.576135], [114.143367, 22.552417]],
        "value": Math.random() * 2500 + 1
    }
];