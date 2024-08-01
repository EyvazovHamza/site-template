const burger = document.querySelector(".fa-bars");
const ul = document.querySelector("ul")
const up = document.querySelector(".fa-caret-up");
up.style.display = "none"
burger.addEventListener("click", () => {
    if (ul.hasAttribute("style") === false) {
        ul.style.left = "0";
    } else {
        ul.style.left = "-120%";
        ul.removeAttribute("style");
    }
});

window.addEventListener("scroll",() => {
let uppScroll = scrollY
console.log(uppScroll)

if(uppScroll > 1000) {
    up.style.display = "block";
    up.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }));
} else {
    up.style.display = "none";
}
});