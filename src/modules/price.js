import { hotSaleFilter, priceFilter } from "./filters"
import getData from "./getData"
import renderGoods from "./renderGoods"

const price = () => {
    const min = document.getElementById('min')
    const max = document.getElementById('max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    min.addEventListener('input', () => {
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), min.value, max.value))
        })
    })

    max.addEventListener('input', () => {
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked),  min.value, max.value))
        })
    })

    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), min.value, max.value))
        })
    })
}

export default price