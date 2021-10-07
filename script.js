let applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener("click", () => {
    let inputValue = document.querySelector(".input-field").value;
    
    if(inputValue == "") return;

    let textContainer = document.querySelector(".text-container");
    let arrayOfLetters = inputValue.split("");
    
    arrayOfLetters.map((value) => {
        if(value == " ") return;
        
       let letterSpan = document.createElement("span");
       letterSpan.classList.add("letters-span");

       letterSpan.innerHTML = value;
       textContainer.appendChild(letterSpan);
    })   
});