function generateTemplate(event) { 

    let i = document.getElementById("initial-year").value;
    let f= document.getElementById("final-year").value;
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let trim = document.getElementById("trim").value;
    let engine = document.getElementById("engine").value;
    
    let outputDiv = document.getElementById("output");

    for (let index = i; index <= f; index++) {
        let template = `${index}>${make}>${model}>${trim}>${engine}<br>`;
        outputDiv.innerHTML+=template;
    }
    
}

function clearList(){
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
}
