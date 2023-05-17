export default function doctorsList() {
    const $categoriesList = document.querySelectorAll("[data-department-category]")
    const $allDoctorsList = document.querySelectorAll("[data-department-doctor]")
    const $title = document.querySelector(".team-section__lists-title")


    const state = {
        _value: "all",
        get category() {
            return this._value
        },
        set category(value) {
            const currentCategory = document.querySelector(`[data-department-category=${value}]`)
            sortDoctorsByCategory(value, $allDoctorsList)
            toggleActiveCategory(currentCategory, document.querySelector(`[data-department-category=${this.category}]`))
            $title.textContent = currentCategory.textContent
            $title.scrollIntoView({behavior: "smooth", block: "start"})
            this._value = value
        }
    }

    // on load
    toggleActiveCategory(document.querySelector(`[data-department-category=${state.category}]`), null)
    sortDoctorsByCategory(state.category, $allDoctorsList)
    // /onload

    $categoriesList.forEach(category => {
        category.addEventListener("click", () => {
            state.category = category.dataset.departmentCategory
        })
    })

    // functions
    function sortDoctorsByCategory(category, doctors) {
        const $doctors = [...doctors]
        const $doctorsNames = $doctors.map(doctor => doctor.querySelector("h5")?.textContent)
        const $uniqueDoctors = $doctors.filter((doctor, index) => {
            if (doctor.querySelector("h5")?.textContent) {
                return $doctorsNames.indexOf(doctor.querySelector("h5")?.textContent) === index
            }
        })

        $doctors.forEach(doctor => {
            if (doctor.dataset.departmentDoctor !== category) {
                doctor.style.display = "none"
            } else {
                doctor.style.display = "list-item"
            }
        })

        if (category === "all") {
            $uniqueDoctors.forEach(doctor => {
                return doctor.style.display = "list-item"
            })
        }

    }

    function toggleActiveCategory(currentCategoryElement, prevCategoryElement) {
        currentCategoryElement.classList.add("active")
        if (prevCategoryElement && prevCategoryElement !== currentCategoryElement) {
            prevCategoryElement.classList.remove("active")
        }
    }

}