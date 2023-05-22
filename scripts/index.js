import headerFixed from "./header.js";
import sectionAnimation from "./sectionAnimation.js";
import doctorsList from "./doctors.js";
import Tabs from "./Tabs.js";
import ScrollNavigation from "./ScrollNavigation.js";

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        // add scroll navigation logic
        const $navPoints = [document.querySelector("#main"),
            document.querySelector("#about"),
            document.querySelector("#services"),
            document.querySelector("#price"),
            document.querySelector("#team"),
            document.querySelector("#articles"),
            document.querySelector("#contacts"),]

        const $navList = document.querySelectorAll(".header__nav-item");
        const $mobileNavList = document.querySelectorAll(".header__mobile-nav-item");
        const $footerNavList = document.querySelectorAll(".footer__nav-item");

        const $logo = document.querySelector(".header__logo")
        const $mainPoint = document.querySelector("#main")

        const $pricesBtn = document.querySelector(".banner").querySelector("button")
        const $pricePoint = document.querySelector(".price-section")

        const navListScroll = new ScrollNavigation([
                ...$navList,
                ...$mobileNavList,
                ...$footerNavList,
                $logo,
                $pricesBtn
            ],
            [
                ...$navPoints,
                ...$navPoints,
                ...$navPoints,
                $mainPoint,
                $pricePoint
            ])

        navListScroll.setNavClickListener()

        // add header on scroll change
        headerFixed()
        // add accordion logic to list

        const servicesPrice = new Tabs(
            document.querySelectorAll(".price-section__price-list"),
            document.querySelectorAll(".price-section__category-list-item-title"),
            document.querySelector(".price-section__category-list"),
            "open-list")
        servicesPrice.onClickListen()

        // add doctors list logic
        doctorsList()
        // add fade animation on scroll
        sectionAnimation()
        // add articles tab logic

        const articles = new Tabs(
            document.querySelectorAll(".articles-section__articles-list-tab"),
            document.querySelectorAll(".articles-section__articles-list-title"),
            document.querySelector(".articles-section__articles-list"));
        articles.onClickListen()
    })
})()
