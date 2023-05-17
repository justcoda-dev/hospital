import headerFixed from "./header.js";
import sectionAnimation from "./sectionAnimation.js";
import scrollNavigation from "./scrollNavigation.js";
import doctorsList from "./doctors.js";
import buttons from "./buttons.js";
import Tabs from "./Tabs.js";

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        // add scroll navigation logic
        scrollNavigation()
        // add header on scroll change
        headerFixed()
        // add accordion logic to list

        const $servicesPrice = new Tabs(
            document.querySelectorAll(".price-section__price-list"),
            document.querySelectorAll(".price-section__category-list-item-title"),
            document.querySelector(".price-section__category-list"),
            "open-list")
        $servicesPrice.onClickListen()

        // add doctors list logic
        doctorsList()
        // active buttons listeners
        buttons()
        // add fade animation on scroll
        sectionAnimation()
        // add articles tab logic

        const $articles = new Tabs(
            document.querySelectorAll(".articles-section__articles-list-tab"),
            document.querySelectorAll(".articles-section__articles-list-title"),
            document.querySelector(".articles-section__articles-list"));
        $articles.onClickListen()
    })
})()
