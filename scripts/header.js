import {debounce} from "./debounce.js";

export default function headerFixed() {
    const $header = document.querySelector(".header")
    const toggleHeight = $header.clientHeight;

    const showToggle = debounce(() => {
        const [$social, $navigation] = $header.children;
        const $navigationLogo = $navigation.querySelector(".header__logo")
        const $navigationList = [...$navigation.querySelector(".header__nav-list").children]
        if (toggleHeight < window.scrollY) {

            $header.style.position = "fixed";
            $header.style["z-index"] = "10";
            $social.style.display = "none";
            $navigation.style.background = "#000000"
            $navigationLogo.style.color = "#00a3c8";
            $navigationList.forEach(item => item.style.color = "#ffffff");

        } else {
            $header.style.position = "absolute";
            $social.style.display = "block";
            $navigation.style.background = "#ffffff"
            $navigationLogo.style.color = "#333333";
            $navigationList.forEach(item => item.style.color = "#00a3c8");
        }
    }, 100)

    showToggle()
    window.addEventListener("scroll", showToggle)

//     mobile header
    let showMenuState = false;
    const $mobileButton = $header.querySelector(".header__mobile-nav-button");
    const $mobileMenu = $header.querySelector(".header__mobile-menu");

    $mobileButton.addEventListener("click", () => {
        showMenuState = !showMenuState
        $mobileMenu.style.display = showMenuState ? "block" : "none";
    })
}