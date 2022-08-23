let applyBtn = document.querySelector(".apply-btn");
let container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  e.stopPropagation();
});

applyBtn.addEventListener("click", function () {
  let inputValue = document.querySelector(".input-field").value;
  if (inputValue === "") return;
  applyBtn.disabled = true;

  let textContainer = document.querySelector(".text-container");
  let arrayOfLetters = inputValue.split("");

  arrayOfLetters.map(function (value, index) {
    if (value === " ") return;

    let letterSpan = document.createElement("span");
    letterSpan.setAttribute("id", `el${index}`);
    letterSpan.classList.add("letters-span");

    letterSpan.innerHTML = value;
    textContainer.appendChild(letterSpan);

    letterSpan?.addEventListener("click", function (e) {
      letterSpan.classList.add("clicked");

      function onMouseMove(e) {
        letterSpan.style.position = "absolute";

        let left =
          (((e.clientX / window.innerWidth) * 100 - 40) * window.innerWidth) /
          100;
        let top =
          (((e.clientY / window.innerHeight) * 100 - 40) * window.innerHeight) /
          100;

        letterSpan.style.left = left + "px";
        letterSpan.style.top = top + 10 + "px";
      }

      document.addEventListener("mousemove", onMouseMove);

      document.addEventListener("click", function (e) {
        document.querySelectorAll(".letters-span").forEach((elem) => {
          elem.classList.remove("clicked");
        });

        const classes = ["apply-btn", "input-field"];

        if (classes.some((element) => e.target.classList.contains(element)))
          return;

        document.removeEventListener("mousemove", onMouseMove);
      });
    });
  });
});
