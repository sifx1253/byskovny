document.querySelector("#burger_menu").addEventListener("click", burger);

function burger() {
    const bmenu = document.querySelector(".mylinks");

    if (bmenu.style.display === "flex") {
        bmenu.style.display = "none";

        document.querySelector("#burger_menu").textContent = "☰";

    } else {
        bmenu.style.display = "flex";
        document.querySelector("#burger_menu").textContent = "X";








    }
}
