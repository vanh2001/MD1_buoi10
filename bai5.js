let table;
table = "<table border='1' cellspacing='0' cellpadding='10'>"
for (let i = 0; i < 10; i++) {
    table += "<tr>";
    for (let j = 0; j < 10; j++) {
        table += "<td>" + i*j + "</td>";
    }
    table += "</tr>"
}
table += "</table>"
document.write(table);