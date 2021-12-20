const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const counterCart = document.querySelector('.counter')

    counterCart.textContent = goods.length

    cartWrapper.innerHTML = ''

    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend', `
        <div id="cart-empty">
            Ваша корзина пока пуста
        </div>
        `)
    } else {
        goods.forEach(good => {
        cartWrapper.insertAdjacentHTML('beforeend', `
                <div class="card" data-key="${good.id}">
                    ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url(${good.img})"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${good.price} ₽</div>
                        <h5 class="card-title">${good.title}</h5>
                        <button class="btn btn-primary">Удалить</button>
                    </div>
                </div>
        `)
    })
    }

    
}

export default renderCart