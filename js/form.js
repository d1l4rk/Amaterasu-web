// function toggleMobileMenu(menu) {
//     menu.classList.add('open');
// }

const closeButton = document.querySelector("#closebutton");
const openClicked = document.querySelector(".contact");

openClicked.addEventListener('click', () => {
    openClicked.classList.add('open');
    closeButton.classList.add('close');
    console.log('vuelve xd')
})

closeButton.addEventListener('click', () => {
    openClicked.classList.remove('open');
    closeButton.classList.remove('close');

    console.log("hola")
})
