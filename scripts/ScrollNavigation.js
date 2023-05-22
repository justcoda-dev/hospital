export default class ScrollNavigation {
    constructor(navList, navPoints) {
        this.navList = navList
        this.navPoints = navPoints
    }

    setNavClickListener() {
        if (this.navList.length === this.navPoints.length) {
            this.navList.forEach((item, index) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault()
                    this.navPoints[index].scrollIntoView({behavior: "smooth", block: "start"})
                })
            })
        }
    }

}