
function checkList() {
    var itemLista = document.getElementById("tarefa").value;
    document.getElementById("coisa").innerHTML += '<div class="row"><div class="col-md-2"><input type="checkbox" onclick = "riscado()" id="IdCheck"> </div><div class ="col-md-8" id="tarefa">' + itemLista + '</div><div class="col-md-2">num</div></div> '

}
function riscado(itemLista) {

    
}