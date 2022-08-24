<template>
  <div>
    <div class="mb-md">
      <input type="file" @change="getWorkbook" />
      <button @click="exportExcel">导出xlsx</button>
    </div>
    <div id="x-spreadsheet-demo"></div>
  </div>
</template>

<script>
import Spreadsheet from 'x-data-spreadsheet';
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';
import XLSX from 'xlsx';
Spreadsheet.locale('zh-cn', zhCN);
export default {
  name: 'xspreadsheet-demo',
  data() {
    return {
      xs: null,
      jsondata: {
        type: '',
        label: ''
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.xs = new Spreadsheet('#x-spreadsheet-demo', {
        showToolbar: true,
        showGrid: true
      })
        .loadData([{ name: 'sheet1' }])
        .change(cdata => {
          // console.log(cdata);
          console.log('>>>', this.xs.getData());
        });
    },
    loadExcelFile(fileSelected) {
      var workbook_object = this.getWorkbook(fileSelected);
      this.xs.loadData(this.stox(workbook_object));
    },
    exportExcel() {
      var new_wb = this.xtos(this.xs.getData());
      XLSX.writeFile(new_wb, 'SheetJS.xlsx');
    },
    xtos(sdata) {
      var out = XLSX.utils.book_new();
      sdata.forEach(function(xws) {
        var aoa = [[]];
        var rowobj = xws.rows;
        for (var ri = 0; ri < rowobj.len; ++ri) {
          var row = rowobj[ri];
          if (!row) continue;
          aoa[ri] = [];
          Object.keys(row.cells).forEach(function(k) {
            var idx = +k;
            if (isNaN(idx)) return;
            aoa[ri][idx] = row.cells[k].text;
          });
        }
        var ws = XLSX.utils.aoa_to_sheet(aoa);
        XLSX.utils.book_append_sheet(out, ws, xws.name);
      });
      return out;
    },
    stox(wb) {
      var out = [];
      wb.SheetNames.forEach(function(name) {
        var o = { name: name, rows: {} };
        var ws = wb.Sheets[name];
        var aoa = XLSX.utils.sheet_to_json(ws, { raw: false, header: 1 });
        aoa.forEach(function(r, i) {
          var cells = {};
          r.forEach(function(c, j) {
            cells[j] = { text: c };
          });
          o.rows[i] = { cells: cells };
        });
        out.push(o);
      });
      return out;
    },
    getWorkbook(fileSelected) {
      let file = fileSelected.target.files[0];
      let reader = new FileReader();
      reader.onload = e => {
        let data = e.target.result,
          fixedData = this.fixData(data),
          workbook = XLSX.read(btoa(fixedData), { type: 'base64' });
        this.xs.loadData(this.stox(workbook));
      };
      reader.readAsArrayBuffer(file);
      // return workbook
    },
    fixData(data) {
      var o = '',
        l = 0,
        w = 10240;
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    }
  }
};
</script>
<style scoped></style>
