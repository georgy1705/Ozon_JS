export const searchFilter = (goods, value) => {
    return goods.filter(good => {
        return good.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter(good => {
        return good.category === value
    })
}

export const priceFilter = (goods, value) => {
    let minValue = value.id === 'min' ? value.value : 0
    let maxValue = value.id === 'max' ? value.value : 50000

    console.log(minValue, maxValue);


    return goods.filter(good => {
        return minValue < good.price && good.price < maxValue
    })
}
