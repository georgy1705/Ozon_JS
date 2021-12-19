import { priceFilter } from "./filters"
import getData from "./getData"
import renderGoods from "./renderGoods"

const price = () => {
    const priceInputs = document.querySelectorAll('.filter-price_input-wrapper > input')

    priceInputs.forEach(item => {
        item.addEventListener('input', e => {
            const price = {
                value: e.target.value,
                id: e.target.id
            }

            getData().then(data => {
                renderGoods(priceFilter(data, price))
            })
        })
    })
}

export default price