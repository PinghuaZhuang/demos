
import { PRO_FILTER, PRO_TOP, PRO_CENTER, PRO_ZOOM } from '../../config/provinces.js'
import { PERSON_COUNT } from '../../config/constant.js'

import echarts from 'echarts'

import common from '../common.js'

export default function (data, geoCoordMap) {

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    function renderItem(params, api) {
        var coords = [
            [116.7, 39.53],
            [103.73, 36.03],
            [112.91, 27.87],
            [120.65, 28.01],
            [119.57, 39.95]
        ];
        var points = [];
        for (var i = 0; i < coords.length; i++) {
            points.push(api.coord(coords[i]));
        }
        var color = api.visual('color');

        return {
            type: 'polygon',
            shape: {
                points: echarts.graphic.clipPointsByRect(points, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                })
            },
            style: api.style({
                fill: color,
                stroke: echarts.color.lift(color)
            })
        };
    }

    let option = {
        backgroundColor: '#404a59',
        title: {
            text: '深圳地图地铁OD图',
            subtext: 'by zp',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff'
            },
            subtextStyle: {
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        bmap: {
            // center: [114.04369, 22.67476],
            center: PRO_CENTER,
            zoom: PRO_ZOOM,
            roam: true,
            mapStyle: {
                styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787",
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
                ]
            }
        },
        series: [
            {
                name: 'Station',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 2
            }, {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data).filter(el => {
                    if (PRO_FILTER.indexOf(el.name) != -1) {
                        el.value[2] = PRO_TOP;
                        return true;
                    }
                }),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                // showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true,
                        position: "left",
                        color: "#fff"
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 15,
                        shadowColor: '#333'
                    }
                },
                zlevel: 3
            }
        ]
    };

    PERSON_COUNT.forEach((el, index) => {

        option.series.push({
            name: '线路_' + index,
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow',
                symbolSize: 10,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //     offset: 0, color: '#58B3CC'
                    // }, {
                    //     offset: 1, color: '#F58158'
                    // }], false),
                    color: common.getColor(el.value),
                    width: 2,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: [el]
        })
    });

    return option;
};