const value = document.querySelector(".value");
const optionList = document.querySelector(".option-list");


value.addEventListener("click", () => {
    optionList.classList.toggle('hidden');
});