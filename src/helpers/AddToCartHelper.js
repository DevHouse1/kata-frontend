import { apiRoot } from "../contexts/GlobalContext";

// hard coded client id , will be dynamic after adding Authentictaion
const addToCartHelper = async (ClientId = 1, productId) => {
    const url = apiRoot + `/api/baskets/${ClientId}/add`;
    const res =  await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // i hard coded quantity, but we can add field form to modify it and make it dynamic
        body: JSON.stringify({ quantity: 1, productId: productId }),
    });
    // handle 400 error in case not enought product in stock
    if(!res.ok) throw res;
    return await res.json();
};

export default addToCartHelper;