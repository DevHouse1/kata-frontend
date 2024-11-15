import { apiRoot } from "../contexts/GlobalContext";

// hard coded client, will be dynamic after adding Authentictaion
const DeleteFromCartHelper = async (ClientId = 1, productId) => {

    const url = apiRoot + `/api/baskets/${ClientId}/remove?productId=${productId}`;
    const response =  await fetch(url, {
        method: 'Delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }); 

    return response.json();
};

export default DeleteFromCartHelper;