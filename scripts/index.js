import headerFixed from "./header.js";
import sectionAnimation from "./sectionAnimation.js";
import services from "./services.js";
import scrollNavigation from "./scrollNavigation.js";
import doctorsList from "./doctors.js";
import buttons from "./buttons.js"

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        // add scroll navigation logic
        scrollNavigation()
        // add header on scroll change
        headerFixed()
        // add accordion logic to list
        services()
        // add doctors list logic
        doctorsList()
        // active buttons listeners
        buttons()
        // add fade animation on scroll
        sectionAnimation()
    })
})()
