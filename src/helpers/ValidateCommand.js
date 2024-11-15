import { apiRoot } from "../contexts/GlobalContext";

// create command for the current logged user
const ValidateCommandHelper = async (commandId) => {
    console.log('ValidateCommandHelper call');

    const url = apiRoot + `/api/orders/${commandId}/validate`;
    
    const response =  await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }); 

    return response.json();
};

export default ValidateCommandHelper;