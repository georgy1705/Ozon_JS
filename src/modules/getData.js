const getData = (value) => {
    return fetch('https://test-94f7d-default-rtdb.firebaseio.com/goods.json')
    .then(response => response.json())
}

export default getData