export default function scrollNavigation() {
    const $navList = document.querySelectorAll(".header__nav-item");
    const $mobileNavList = document.querySelectorAll(".header__mobile-nav-item");
    const $footerNavList = document.querySelectorAll(".footer__nav-item");
    const $sections = [...document.querySelectorAll("section")];

    $sections.forEach((section, index) => {
        section.dataset.scrollId = index.toString()
    })

    $navList.forEach((navItem, index) => {
        navItem.addEventListener("click", (e) => {
            e.preventDefault()
            $sections[index].scrollIntoView({behavior: 'smooth', block: 'start'})
        })
    })
    $mobileNavList.forEach((navItem, index) => {
        navItem.addEventListener("click", (e) => {
            e.preventDefault()
            $sections[index].scrollIntoView({behavior: 'smooth', block: 'start'})
        })
    })

    $footerNavList.forEach((navItem, index) => {
        navItem.addEventListener("click", (e) => {
            e.preventDefault()
            $sections[index].scrollIntoView({behavior: 'smooth', block: 'start'})
        })
    })

}