import {uniqueId} from "./id.js";

export default function services() {
    const $list = document.querySelector(".price-section__category-list");
    const $listItems = document.querySelectorAll(".price-section__category-list-item");

    setDataId($listItems, "h4")

    const state = {
        _value: null,
        get showItems() {
            return this._value
        },
        set showItems(value) {
            this._value = value
            showItemToggle(value)
        },
    }

    state.showItems = [...$listItems].map(item => {
        return {
            item: item,
            id: item.querySelector("h4").dataset.id,
            show: false
        }
    })

    $list.addEventListener("click", ({target}) => {
        const id = target.dataset.id
        state.showItems = state.showItems.map(item => {
            if (item.id === id) {
                return {...item, show: !item.show}
            } else {
                return item
            }
        })
    })

    function setDataId(list, selector) {
        list.forEach(item => {
            const $title = item.querySelector(selector)
            $title.dataset.id = uniqueId()
            return item
        })
    }

    function showItemToggle(currentState) {
        currentState.forEach(({item, show}) => {
            if (show) {
                item.classList.add("open")
            } else {
                item.classList.remove("open")
            }
        })
    }
}