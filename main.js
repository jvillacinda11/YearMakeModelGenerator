function generateTemplate(event) { 

    event.preventDefault();

    let i = document.getElementById("initial-year").value;
    let f= document.getElementById("final-year").value;
    let make = document.getElementById("Make").value;
    let model = document.getElementById("Model").value;
    let trim = document.getElementById("trim").value;
    let engine = document.getElementById("engine-name").value;
    let eol = document.querySelector('input[name="eol"]:checked').value;

    console.log(eol)
    
    let outputDiv = document.getElementById("output");
    if (i<=f) {
        for (let index = i; index <= f; index++) {
                if (eol === 'nl') {
                    let template = `${index}>${make}>${model}>${trim}>${engine}\r\n`;
                    outputDiv.innerHTML+=template;
                }
                if (eol === 'vert') {
                    let template = `${index}>${make}>${model}>${trim}>${engine}|`;
                    outputDiv.innerHTML+=template;
                }

            }

    } else {
        alert("Final year must greater than or equal to initial year!")        
    }
    
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        clearList();
    }
})

function clearList(){
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
}
