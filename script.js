
function drawTable(val) {
    var row =Number(document.getElementById("rows").value)
    var column =Number(document.getElementById("columns").value)
    var sign = selection.value
    var tab = "<table>"
    if (document.getElementById("columns").value =="" && document.getElementById("rows").value ==""){
        err.style.display= "block"
    }
    for (var i = 1; i<=column; i++){
        tab += "<tr>"
        for (var j=1; j<=row;j++){
            var calcValue = (eval(i + sign + j))
       
            if (calcValue % 1 !==0){
                var calcValue = parseFloat(eval(i + sign + j)).toFixed(2)
            }
            tab += `<td> ${i}  ${sign}  ${j}  =  ${calcValue} <br> <br>`
            tab+= "</td>"
        }
    }
    tab+= "</tr>"
    tab+= "</table>"
    dispDiv.innerHTML = tab
}