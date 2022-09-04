import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'

function postData(urlAPI, dataToSend) {
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })

    return response
}

const dataToSend = {
    "title": "Funko Rick y Morty",
    "price": 15,
    "description": "Un funko bien bacano de Rick y Morty",
    "categoryId": 5,
    "images": ["https://i.ibb.co/TBzLQFT/rick-armado-funko-pop-rick-and-morty-rick-y-morty-172-D-NQ-NP-614652-MCO26014605205-092017-F.jpg"]
}

postData(`${API}/products`, dataToSend)
    .then(response => response.json())
    .then(data => console.log(data))