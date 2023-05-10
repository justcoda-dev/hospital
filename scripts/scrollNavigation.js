export default function scrollNavigation() {
    const $navList = document.querySelectorAll(".header__nav-item");
    const $mobileNavList = document.querySelectorAll(".header__mobile-nav-item");
    const $footerNavList = document.querySelectorAll(".footer__nav-item");

    const $main = document.querySelector("#main")
    const $about = document.querySelector("#about")
    const $services = document.querySelector("#services")
    const $price = document.querySelector("#price")
    const $team = document.querySelector("#team")
    const $contacts = document.querySelector("#contacts")

    const navMarks = [$main, $about, $services, $price, $team, $contacts]

    setNavClickListener($navList, navMarks);
    setNavClickListener($mobileNavList, navMarks);
    setNavClickListener($footerNavList, navMarks);

    function setNavClickListener(list, marks) {
        if (list.length === marks.length) {
            list.forEach((item, index) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault()
                    marks[index].scrollIntoView({behavior: "smooth", block: "start"})
                })
            })
        }
    }

//section on scroll
    const $logo = document.querySelector(".header__logo")
    $logo.addEventListener("click", () => {
        $main.scrollIntoView({behavior: "smooth", block: "start"})
    })
}
