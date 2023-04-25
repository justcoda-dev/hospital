export default function () {
    const $pricesBtn = document.querySelector(".banner").querySelector("button")
    const $priceSection = document.querySelector(".price-section")
    $pricesBtn.addEventListener("click", () => {
        $priceSection.scrollIntoView({behavior: 'smooth', block: 'start'})
    })
}