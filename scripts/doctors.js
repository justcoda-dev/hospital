export default function doctorsList() {
    const categories = document.querySelectorAll("[data-department-category]")
    const allDoctors = document.querySelectorAll("[data-department-doctor]")

    const state = {
        _value: "all",
        get category() {
            return this._value
        },
        set category(value) {
            sortDoctorsByCategory(value, allDoctors)
            toggleActiveCategory(document.querySelector(`[data-department-category=${value}]`), document.querySelector(`[data-department-category=${this.category}]`))
            this._value = value
        }
    }

    state.category = "all"

    categories.forEach(category => {
        category.addEventListener("click", () => {
            state.category = category.dataset.departmentCategory
        })
    })


    function sortDoctorsByCategory(category, doctors) {
        doctors.forEach(doctor => {
            if (category === "all") {
                return doctor.style.display = "list-item"
            } else if (doctor.dataset.departmentDoctor !== category) {
                doctor.style.display = "none"
            } else {
                doctor.style.display = "list-item"
            }
        })
    }

    function toggleActiveCategory(currentCategoryElement, prevCategoryElement) {
        currentCategoryElement.classList.add("active")
        if (prevCategoryElement !== currentCategoryElement) {
            prevCategoryElement.classList.remove("active")
        }
    }

}