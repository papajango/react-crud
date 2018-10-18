const API_URL = window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ? 'http://localhost:5000/products' : 'https://react-crud-api.now.sh/products';

export function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json());
}

export function getProduct(id) {
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(product => product[0]);
}

export function createProduct(product) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());
}

export function updateProduct(id, product) {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());
}

export function deleteProduct(id) {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json());
}