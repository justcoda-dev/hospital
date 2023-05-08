import {debounce} from "./debounce.js";

export default function sectionAnimation() {
    const $intro = document.querySelector("#intro")
    const $about = document.querySelector("#about")
    const $services = document.querySelector("#services")
    const $price = document.querySelector("#price")
    const $team = document.querySelector("#team")
    const $elements = [$intro, $about, $services, $price, $team]

    const debouncedOnScroll = debounce(() => {
        const observer = new IntersectionObserver((elements) => {
            elements.forEach(element => {
                if (element.isIntersecting) {
                    element.target.classList.add("fade-in")
                } else {
                    element.target.classList.remove("fade-in")
                }
            })
        })

        $elements.forEach(element => {
            observer.observe(element)
        })

    })
    debouncedOnScroll()
    window.addEventListener("scroll", debouncedOnScroll)

//    fn

}