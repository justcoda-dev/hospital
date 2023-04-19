import headerFixed from "./header.js";
import services from "./services.js";
import scrollNavigation from "./scrollNavigation.js";
import doctorsList from "./doctors.js";

(() => {
    // add scroll navigation logic
    scrollNavigation()
    // add header on scroll change
    headerFixed()
    // add accordion logic to list
    services()
    // add doctors list logic
    doctorsList()

})()
