import {debounce} from "./debounce.js";

export default function headerFixed() {
    const $header = document.querySelector(".header")
    const toggleHeight = $header.clientHeight;

    const showToggle = debounce(() => {
        if (toggleHeight < window.scrollY) {
            $header.classList.add("dark")
        } else {
            $header.classList.remove("dark")
        }
    }, 50)

    showToggle()
    window.addEventListener("scroll", showToggle)

//     mobile header
    let state = {
        get showMenu() {
            return this._value
        },
        set showMenu(v) {
            this._value = v
            if (v) {
                $mobileMenu.classList.add("open-menu")
            } else {
                $mobileMenu.classList.remove("open-menu")
            }
        }
    }

    const $mobileButton = $header.querySelector(".header__mobile-nav-button");
    const $mobileMenu = $header.querySelector(".header__mobile-menu");

    $mobileButton.addEventListener("click", () => {
        state.showMenu = !state.showMenu
    })

    $mobileMenu.querySelector(".header__mobile-nav-list").addEventListener("click", () => {
        state.showMenu = false
    })
}