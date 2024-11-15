import { apiRoot } from "../contexts/GlobalContext";

// hard coded client, will be dynamic after adding Authentictaion
const CancelCommandHelper = async (commandId) => {
    const url = apiRoot + `/api/orders/${commandId}/cancel`;
    const response =  await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }); 
    
    if(!response.ok) throw response;
    return response.json();
};

export default CancelCommandHelper;