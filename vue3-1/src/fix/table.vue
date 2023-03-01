<template>
    <div class="fix-table">
        <el-button @click="edit">编辑</el-button>
        <el-button @click="cancel">取消</el-button>
        <div class="table-wrap">
            <pl-table
                :pagination-show="false"
                :datas="tableData"
                big-data-checkbox
                style="width: 100%"
                use-virtual
                :row-height="50"
                :row-class-name="tableRowClassName"
                :cell-class-name="tableCellClassName">

                <pl-table-column
                    prop="id"
                    label="ID"
                    width="180">
                    <template slot-scope="scope">
                        <span v-show="statu === 0">{{ scope.row.id }}</span>
                        <el-select v-show="statu === 1" v-model="scope.row.id">
                            <el-option v-for="( item, index ) in options" :key="index"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </template>
                </pl-table-column>
                <pl-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    <template slot-scope="scope">
                        <span v-show="statu === 0">{{ scope.row.id }}</span>
                        <el-select v-show="statu === 1" v-model="scope.row.id">
                            <el-option v-for="( item, index ) in options" :key="index"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </template>
                </pl-table-column>
                <pl-table-column
                    prop="address"
                    label="地址">
                    <template slot-scope="scope">
                        <span v-show="statu === 0">{{ scope.row.id }}</span>
                        <el-select v-show="statu === 1" v-model="scope.row.id">
                            <el-option v-for="( item, index ) in options" :key="index"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </template>
                </pl-table-column>
                <pl-table-column
                    prop="age"
                    label="年龄">
                    <template slot-scope="scope">
                        <span v-show="statu === 0">{{ scope.row.id }}</span>
                        <el-select v-show="statu === 1" v-model="scope.row.id">
                            <el-option v-for="( item, index ) in options" :key="index"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </template>
                </pl-table-column>
                <pl-table-column
                    prop="age"
                    label="年龄2">
                    <template slot-scope="scope">
                        <span v-show="statu === 0">{{ scope.row.id }}</span>
                        <el-select v-show="statu === 1" v-model="scope.row.id">
                            <el-option v-for="( item, index ) in options" :key="index"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </template>
                </pl-table-column>
                <pl-table-column
                    prop="age"
                    label="年龄3">
                    <template slot-scope="scope">
                        <span v-show="statu === 0">{{ scope.row.id }}</span>
                        <el-select v-show="statu === 1" v-model="scope.row.id">
                            <el-option v-for="( item, index ) in options" :key="index"
                            :label="item.label"
                            :value="item.value"></el-option>
                        </el-select>
                    </template>
                </pl-table-column>
            </pl-table>
        </div>
    </div>
</template>

<script>
import plTable from 'pl-table'
import { PlTable, PlTableColumn } from 'pl-table'

export default {
    name: 'FixTabel',
    components: {
        PlTable, PlTableColumn
    },

    data () {
        return {
            tableData: Array.from( { length: 600 } ).map( ( item, index ) => {
                return {
                    id: 0,
                    name: `name-${index}`,
                    age: 10000 + index,
                    address: `拉手孔寄过来看见奥利给看见奥利给看见`,
                    class: `row-${index}`,
                }
            } ),

            statu: 0,

            options: [
                {
                    label: '001',
                    value: 0,
                },
                {
                    label: '002',
                    value: 1,
                }
            ],
        }
    },

    created () {
        console.log( 'plTable:', plTable  )
    },

    methods: {
        tableRowClassName ( { row } ) {
            return row.class
        },
        tableCellClassName ( { row, column, rowIndex, columnIndex } ) {
            return `cell-${rowIndex}-${columnIndex}`
        },
        edit () {
            this.statu = 1
        },
        cancel () {
            this.statu = 0
        },
    }
}
</script>

<style lang="less" scoped>
.fix-table {
    // width: 100%;
    // height: 100%;

    .table-wrap {
        height: 500px;
    }
}
</style>
