import {uniqueId} from "./id.js";

export default function services() {

    const $list = document.querySelector(".price-section__category-list");
    const $listItems = setDataId([...$list.children], "h4")
    const shownItemsState = $listItems.map(item => {
        return {id: item.querySelector("h4").dataset.id, show: false}
    })


    $list.addEventListener("click", event => {
        const id = event.target.dataset.id;
        shownItemsState.forEach((shownItem, index) => {
            if (shownItem.id === id) {
                shownItem.show = !shownItem.show
                if (shownItem.show) {
                    $listItems[index].classList.add("open")
                } else {
                    $listItems[index].classList.remove("open")
                }
            }
        })
    })

    function setDataId(list, selector) {
        return list.map(item => {
            const $title = item.querySelector(selector)
            $title.dataset.id = uniqueId()
            return item
        })
    }
}