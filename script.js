let applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener("click", () => {
    let inputValue = document.querySelector(".input-field").value;
    
    if(inputValue == "") return;

    let textField = document.querySelector(".text-field");
    let arrayOfLetters = inputValue.split(" ");
    textField.innerText = inputValue;
});