import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// plugins
import QRcode from 'qrcode'

@Component( {
    components: {
        // VModel,
    }
} )
export default class Plugins extends Vue {

    render () {
        return <div id="QRcode">
            <h1>QRcode</h1>
            <canvas id="QRcodeCanvas"></canvas>
        </div>
    }

    mounted () {
        this.$nextTick( () => {
            var canvas = document.querySelector( '#QRcodeCanvas' )

            QRcode.toCanvas( canvas, 'https://www.baidu.com', function ( error ) {
                if ( error == null ) {
                    console.log( 'error:', error )
                }
                console.log( 'success:', error )
            } )
        } )
    }
}
