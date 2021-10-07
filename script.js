let applyBtn = document.querySelector(".apply-btn");
let container = document.querySelector(".container");

container.addEventListener('click', (e) => {
    e.stopPropagation()
})

applyBtn.addEventListener("click", () => {
    applyBtn.disabled = true;

    let inputValue = document.querySelector(".input-field").value;

    if(inputValue === "") return;

    let textContainer = document.querySelector(".text-container");
    let arrayOfLetters = inputValue.split("");
    
    arrayOfLetters.map((value) => {
        if(value === " ") return;
        
       let letterSpan = document.createElement("span");
       letterSpan.classList.add("letters-span");

        letterSpan?.addEventListener("click", function () {

            const onMouseMove = (e) => {
                letterSpan.style.position = 'absolute';
                let left = ((((e.clientX/window.innerWidth) * 100) - 40) * window.innerWidth) / 100;
                let top = ((((e.clientY/window.innerHeight) * 100) - 40) * window.innerHeight) / 100;

                console.log(left)
                letterSpan.style.left = left + 'px';
                letterSpan.style.top = top + 10 + 'px';
            }

            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('click', (e) =>{
                const classes = ['letters-span', 'apply-btn', 'input-field']

                if(classes.some(element => e.target.classList.contains(element))) return;

                document.removeEventListener('mousemove', onMouseMove)
            })
        })
       letterSpan.innerHTML = value;
       textContainer.appendChild(letterSpan);
    })   
});
