<template>
    <div class="xlxs">
        <div>
            <input type="file" multiple="false" id="sheetjs-input" accept=" + SheetJSFT + " @change="onchange" />,
            <br/>
            <button type="button" id="export-table" style="visibility:hidden" @click="onexport">Export to XLSX</button>,
            <br/>
            <div id="out-table"></div>
        </div>
    </div>
</template>

<script>
import XLSX from 'xlsx'

var SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",")

console.log( XLSX )

/**
    FileReader共有4种读取方法：
    1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
    2.readAsBinaryString(file)：将文件读取为二进制字符串
    3.readAsDataURL(file)：将文件读取为Data URL
    4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
*/

export default {
    name: 'xlxs',

    methods: {
		onchange: function(evt) {
			var file;
			var files = evt.target.files;

			if (!files || files.length == 0) return;

			file = files[0];

			var reader = new FileReader();
			reader.onload = function (e) {
				// pre-process data
				var binary = "";
				var bytes = new Uint8Array(e.target.result);
				console.log( 'xxxxxxxx', e )
				var length = bytes.byteLength;
				for (var i = 0; i < length; i++) {
					binary += String.fromCharCode(bytes[i]);
				}

				/* read workbook */
				var wb = XLSX.read(binary, {type: 'binary'});

				/* grab first sheet */
				var wsname = wb.SheetNames[0];
				var ws = wb.Sheets[wsname];

				/* generate HTML */
				var HTML = XLSX.utils.sheet_to_html(ws);

				/* update table */
				document.getElementById('out-table').innerHTML = HTML;
				/* show export button */
				document.getElementById('export-table').style.visibility = "visible";
			};

			reader.readAsArrayBuffer(file);
		},
		onexport: function(evt) {
			/* generate workbook object from table */
			var wb = XLSX.utils.table_to_book(document.getElementById('out-table'));
			/* generate file and force a download*/
			XLSX.writeFile(wb, "sheetjs.xlsx");
		}
	}
}
</script>
