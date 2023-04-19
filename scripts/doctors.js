export default function doctorsList() {
    let activeCategoryState = "all";

    const categories = document.querySelectorAll("[data-department-category]")

    categories.forEach(item => {
        if (item.dataset.departmentCategory === activeCategoryState) {
            item.classList.add("active")
        }
        item.addEventListener("click", () => {
            activeCategoryState = item.dataset.departmentCategory
            categories.forEach(item => {
                if (activeCategoryState === item.dataset.departmentCategory) {
                    item.classList.add("active")
                } else {
                    item.classList.remove("active")
                }
            })
            toggleDoctorsByCategory(activeCategoryState)
        })
    })


    function toggleDoctorsByCategory() {
        const allDoctors = document.querySelectorAll("[data-department-doctor]")

        allDoctors.forEach(doctor => {
            if (activeCategoryState === "all") {
                return doctor.style.display = "list-item"
            } else if (doctor.dataset.departmentDoctor !== activeCategoryState) {
                doctor.style.display = "none"
            } else {
                doctor.style.display = "list-item"
            }
        })
    }


}