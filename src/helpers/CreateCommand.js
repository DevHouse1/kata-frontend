import { apiRoot } from "../contexts/GlobalContext";

// create command for the current logged user
const CreateCommandHelper = async (clientid = 1) => {
    const url = apiRoot + `/api/orders/${clientid}`;
    const response =  await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }); 

    return response.json();
};

export default CreateCommandHelper;