<template>
  <el-table :data="datas" style="width: 100%" stripe :border="true" size="mini"
    height="300">
    <el-table-column prop="date" label="日期" width="150" class="level-1"></el-table-column>
    <el-table-column label="配送信息">
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column label="地址">
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120" >
            <!-- 这里的 slot-scope 不能使用 : -->
            <template slot-scope="{ row: { date } }">
                <el-button type="primary" size="small">{{ date }}111</el-button>
            </template>
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    name: 'table-demo',

    data () {
        return {
            datas: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }
            ],

            // 外部传入的 component
            header: [
                {
                    prop: 'xxx',
                    value: 'xxxx',
                    componten: {
                        [ NORMAL ] : 1,
                        [ EDIT ]: 2
                    }
                }
            ]
        }
    },

    methods: {

    }
}
</script>

<style lang="less" scoped>
.level-1 {
    background-color: blue;
}
</style>
