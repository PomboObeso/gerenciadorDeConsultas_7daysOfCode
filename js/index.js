const page = document.getElementsByTagName('body');
const cardSection = document.querySelectorAll('.card__consulta');

const btnMais = document.querySelector('.rodape__btn--agenda');

console.log(cardSection);

btnMais.addEventListener("click", () => {
    page[0].classList.add("efeito__opacidade");
    // cardSection[0].classList.add("efeito__opacidade");
    // cardSection[1].classList.add("efeito__opacidade");
});


