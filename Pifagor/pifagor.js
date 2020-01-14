function addTable() {
    var pifagorsTable = document.getElementById("main");
    var table = document.createElement('div');
    for (var i = 1; i <= 9; i++) {
        var row = document.createElement('div');
        table.appendChild(row);
        for (var j = 1; j <= 9; j++) {
            var col = document.createElement('div');
            col.appendChild(document.createTextNode(j * i));
            row.appendChild(col);
            if (i > j) {
                col.classList.add("bl");
            } else if (i < j) {
                col.classList.add("yel")
            }
        }
        pifagorsTable.appendChild(table);
    }
}
addTable()


