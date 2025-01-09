const select = document.querySelector("#select");
const optionList = document.querySelector(".option-list");
const value = document.querySelector('.value');


select.addEventListener("click", () => {
    optionList.classList.toggle('hidden');
    value.classList.toggle('hidden');
});