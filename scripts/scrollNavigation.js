export default function scrollNavigation() {
    const $navList = document.querySelector(".header__nav-list");
    const $sections = [...document.querySelectorAll("section")];

    $sections.forEach((section, index) => {
        section.dataset.scrollId = index.toString()
    })
    $navList.addEventListener("click", (e) => {
        e.preventDefault()
        $sections[3].scrollIntoView({behavior: 'smooth', block: 'center'})
    })

}