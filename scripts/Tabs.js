import {uniqueId} from "./id.js";

export default class Tabs {
    #state;

    constructor(tabs, tabTitle, list, addClass) {
        this.addClass = addClass;
        this.list = list;
        this.tabs = tabs;
        this.tabTitle = tabTitle;
        this.#state = this.#setState();
    }

    #setState() {
        this.#setDataId()
        return [...this.tabs].map(item => {
            return {
                item: item,
                id: item.parentElement.dataset.id,
                show: false
            }
        })

    }

    #setDataId() {
        [...this.list.children].forEach(item => {
            item.dataset.id = uniqueId()
            return item
        })
    }

    #showToggle() {
        this.#state.forEach(({item, show}) => {
            if (show) {
                item.classList.add(this.addClass || "open")
            } else {
                item.classList.remove(this.addClass || "open")
            }
        })
    }

    onClickListen() {
        this.tabTitle.forEach(title => {
            title.addEventListener("click", ({target}) => {
                const id = target.parentElement.dataset.id
                this.#state = this.#state.map(item => {
                    if (item.id === id) {
                        return {...item, show: !item.show}
                    } else {
                        return item
                    }
                })
                this.#showToggle()
            })
        })

    }
}