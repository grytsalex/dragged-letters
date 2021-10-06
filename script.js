let applyBtn = document.querySelector(".apply-btn");

applyBtn.addEventListener("click", () => {
    let inputValue = document.querySelector(".input-field").value;
    
    if(inputValue == "") return;

    let textContainer = document.querySelector(".text-container");
    let arrayOfLetters = inputValue.split("");
    console.log(arrayOfLetters)

    textContainer.innerHTML = arrayOfLetters.map((value) => {
       return `<span class="letter">${value}</span>`
    })   
});


// let applyBtn = document.querySelector(".apply-btn");
// let inputValue = document.querySelector(".text-container");
// let input = document.querySelector(".input-field");



// applyBtn.addEventListener("click", () => {
//     let arrayOfLetters = input.value.split("");
//     let arrayOfNewSpans = arrayOfLetters.map(value => {

//         let newSpan = document.createElement('span')
//         newSpan.innerHTML = value;
//         inputValue.appendChild(newSpan)
//     })
// });