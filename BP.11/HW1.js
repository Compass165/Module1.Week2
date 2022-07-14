let sout, i, j;
sout = "<table border='1' width='50%' cellspacing='0' cellpadding='20%'>";
debugger;
for (i = 2; i <= 10; i++) {
    sout = sout + "<tr>";
    for (j = 2; j <= 10; j++) {
        sout = sout + "<td>" + j + "*" + i + "=" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);