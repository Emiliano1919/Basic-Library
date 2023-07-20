var btn = document.querySelector("#btn");
var modal = document.querySelector("#modal");
var close = document.querySelector(".close-modal");
var submit = document.querySelector("#submit")

btn.addEventListener('click', () => {
    modal.classList.add('opened');
});

close.addEventListener('click', () => {
    modal.classList.remove('opened');
});
