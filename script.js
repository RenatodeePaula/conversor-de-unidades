// Selecionar Elementos
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

// Função para converter as unidades
function convert() {
    const fromvalue = fromElement.value
    const toValue = toElement.value
    if(inputElement.value == ""){
        alert("Digite a quantidade desejada!")
    } else {
       if(fromvalue === toValue) {
        outputElement.value = `${inputElement.value} ${toElement.options[toElement.selectedIndex].textContent}`
        messageElement.textContent = "Altere uma das unidades de medida para conversão."
        return
    }

    // Converter a entrada para metros
    let meters       
    switch(fromvalue){
        case "m":
            meters = inputElement.value
            break
        case "km":            
            meters = inputElement.value * 1000
            break
        case "cm":
            meters = inputElement.value / 100
            break
        case "mm":
            meters = inputElement.value / 1000
            break
    }

     // Converter a saída para metros
    let result    
    switch(toValue){
        case "m":
            result = meters
            break
        case "km":
            result = meters / 1000
            break
        case "cm":
            result = meters * 100
            break
        case "mm":
            result = meters * 1000
            break
    }
    const unitFrom  = fromElement.options[fromElement.selectedIndex].textContent
    const unitTo  = toElement.options[toElement.selectedIndex].textContent
    
    outputElement.value = `${result} ${unitTo}`
    messageElement.textContent = ` ${inputElement.value}  ${unitFrom} equivalem a ${result} ${unitTo}`   
} 
}
convertButton.addEventListener("click",  convert)




