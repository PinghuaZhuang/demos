<template>
    <el-upload
        ref="upload"
        class="upload-demo"
        with-credentials
        drag
        accept=".xlsx,.xls"
        action=""
        multiple
        :limit="2"

        :before-upload="handleBeforUpload"
        :on-success="handleSuccess"
        :http-request="handleHttpRequest"
        :on-exceed="handleExceed">

        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>

        <div class="el-upload__tip" slot="tip" @click="handleSubmit">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
</template>

<script>
import XLSX from 'xlsx'

export default {
    name: 'lc-upload',

    data () {
        return {
            uid: '',
            cacheFiles: []
        }
    },

    computed: {
        files () {
            return this.$refs.upload.$children.find( item => {
                return item.files
            } ).files
        }
    },

    methods: {
        handleBeforUpload ( file ) {
            console.log( this.$refs.upload )
            this.uid = file.uid

            let { name } = file

            if ( /副本/.test( name ) ) {
                return false
            }

            let index = -1
            index = this.cacheFiles.findIndex( item => {
                console.log( 'name', item, name )
                return item = name
            } )

            console.log( 'index', index )

            if ( index !== -1 ) {
                window.setTimeout( () => {
                    console.log( 'xxxxxx', index )
                    this.files.splice( index, 1 )
                }, 1000 )
            } else {
                this.cacheFiles.push( file.name )
            }



            console.log( 'file:', file, this.files )

            let reader = new FileReader()

            reader.onload = ( e ) => {
                let binary = "", i
				let bytes = new Uint8Array( e.target.result )
				let length = bytes.byteLength
				for ( i = 0; i < length; i++ ) {
					binary += String.fromCharCode( bytes[ i ] )
                }

                let wb = XLSX.read( binary, { type: 'binary' } )
                console.log( 'wb', wb )

                var wsname = wb.SheetNames[ 0 ]
                var ws = wb.Sheets[ wsname ]

                var HTML = XLSX.utils.sheet_to_html(ws)
                var xlsxJson = XLSX.utils.sheet_to_json( ws, { header: 1 } )
                var xlsxObj = XLSX.utils.sheet_to_row_object_array( ws, { header: [ 'a', 'b', 'c' ] } )
                console.log( HTML, xlsxJson, xlsxObj )
            }

            reader.readAsArrayBuffer( file )
        },
        handleSuccess ( e ) {
            console.log( 'xxxxxxx', e )
        },
        handleHttpRequest ( _http ) {
            // this.$refs.upload.handleSuccess( this.uid )
        },
        handleSubmit () {
            this.$refs.upload.submit()
        },
        handleExceed () {
            this.cacheFiles = []
        },
    }
}
</script>
