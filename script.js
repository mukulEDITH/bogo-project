
document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    const totalElement = document.querySelector(".total span");

    options.forEach(option => {
        option.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("selected"));
            option.classList.add("selected");

            const price = option.querySelector(".price").textContent;
            totalElement.textContent = price;
        });
    });
});
