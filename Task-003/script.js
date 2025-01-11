const accordion = document.querySelectorAll(".accordion-body");

accordion.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("active");
    });
});
