var columnDefs = [
    {headerName: "id", field: "id", width: 150},
    {headerName: "First Name", field: "first_name", width: 90, filter: 'agNumberColumnFilter'},
    {headerName: "Last Name", field: "last_name", width: 120},
    {headerName: "Email", field: "email", width: 90},
    {
        headerName: "Gender", 
        field: "gender", 
        width: 145, 
        filter:'agDateColumnFilter', 
        cellEditor: 'agSelectCellEditor',
        cellEditorParams:{
            values: ['Male', 'Female']
        }},
    {headerName: 'IP address', field: 'ip_address', width: 100},
    {headerName: 'Editable', field: 'editable', width: 100}];

var gridOptions = {
    rowData: null,
    columnDefs: columnDefs,
    defaultColDef: {
        width: 100,
        // make every column editable
        editable: true,
        resizable: true,
        filter: 'agTextColumnFilter'
    },
    editType: 'fullRow',
    onRowValueChanged: function(event) {
        var data = event.data;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(event) {
            if (this.readyState == 4 && this.status == 200) {
              console.log(event.target.responseText);
            }
          };
        xhttp.open('POST', '/post_data', true);
        xhttp.setRequestHeader("Content-type", 'application/json;charset=UTF-8"');
        xhttp.send(JSON.stringify(data));
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({url: '/get_data'}).then(function(data) {
        data = JSON.parse(data);
        console.log(data);
        gridOptions.api.setRowData(data);
    });
});