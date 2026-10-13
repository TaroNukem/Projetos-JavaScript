let novoCalculo = false

function insert(data){
    const display  = document.getElementById("display")

    if(novoCalculo){
        display.value = "";
        novoCalculo = false
    }

    display.value += data
}

function clean(){
    document.getElementById("display").value = ""
    novoCalculo = false;
}

function back(){
    const display = document.getElementById("display")
    display.value = display.value.slice(0,-1)
}

function result(){
    const display = document.getElementById("display")
    try{
        resultado = eval(display.value).toFixed(5)

        if(!Number.isFinite(resultado)){
            display.value = "Error"
            novoCalculo = true
            return;
        }

        display.value = Number(resultado.toFixed(5)).toString()
        novoCalculo = true
    }
    catch{
        display.value = "Error"
        novoCalculo = true
    }
}