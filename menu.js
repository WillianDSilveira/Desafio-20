let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const liActive = menuSection.querySelector(".nav")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle("on", show) 
    show = !show;
})

liActive.addEventListener("click", () => {        
    menuSection.classList.toggle("on", show)
    show = !show;
})
