function createTable() {
    var table = document.getElementById('table0');
    console.log(table)
    var rowInput = document.getElementById('rows').value;
    var cellInput = document.getElementById('cells').value;
    console.log(rowInput + " by " + cellInput);
    var cell,
        text;

    table.innerHTML = '';
    for (let j = 0; j < rowInput; j++) {
        var row = table.insertRow(-1);

        for (var i = 0; i < cellInput; i++) {
            cell = row.insertCell(-1);
            text = 'Row ' + (row.rowIndex + 1) + ' Cell ' + (i+1);
            cell.appendChild(document.createTextNode(text));
        }
    }
}

function createTenByTenTable(){
    var table = document.getElementById('table0');
    var cell,
        text;

    table.innerHTML = '';
    for (let j = 0; j < 10; j++) {
        var row = table.insertRow(-1);

        for (var i = 0; i < 10; i++) {
            cell = row.insertCell(-1);
            text = 'Row ' + (row.rowIndex + 1) + ' Cell ' + (i+1);
            cell.appendChild(document.createTextNode(text));
        }
    }
}

function resetTable() {
    var table = document.getElementById('table0');
    var tableDiv = document.getElementById('table-div');
    table.remove();
    console.log('table add')
    tableDiv.innerHTML = `<table id="table0"> <tr><td>I was reset</td></tr> </table>`;

    console.log(tableDiv);

    // var table = document.getElementById('table0');
    // // table.innerHTML = ``;

    // console.log(table.lastChild)
    // table.removeChild(table.lastChild);

}