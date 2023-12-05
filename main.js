function generateTemplate(event) { 

    event.preventDefault();

    let i = document.getElementById("initial-year").value;
    let f= document.getElementById("final-year").value;
    let make = document.getElementById("Make").value;
    let model = document.getElementById("Model").value;
    let trim = document.getElementById("trim").value;
    let engine = document.getElementById("engine-name").value;
    
    let outputDiv = document.getElementById("output");
    if (i<=f) {
        for (let index = i; index <= f; index++) {
            let template = `${index}>${make}>${model}>${trim}>${engine}<br>`;
            outputDiv.innerHTML+=template;
        }
    } else {
        alert("Final year must greater than or equal to intial year!")        
    }
    
}

function clearList(){
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
}
