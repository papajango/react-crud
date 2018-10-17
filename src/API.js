const API_URL = 'http://localhost:5000/products';

export function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json());
}

export function getProduct(id) {
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(product => product[0]);
}

