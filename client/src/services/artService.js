import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/arts'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (artID) => {
    const queries = new URLSearchParams({
        where: `_id="${artID}"`,
        load: `owner=_ownerId:users`
    });

    const response = await fetch(`${baseUrl}?${queries}`);
    
    if (!response.ok) {
        throw new Error(`Error fetching art details: ${response.statusText}`);
    }

 
    const result = await response.json();
    
    return result[0]; 
};



export const create = async (artData) => {
    const result = await request.post(baseUrl, artData);

    return result;
};

export const getLatest = async () => {
    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc&pageSize=4`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch the latest arts');
    }

    const result = await response.json();
    return result;
};

export const edit = async (artID, artData) => {
    const result = await request.put(`${baseUrl}/${artID}`, artData);

    return result;
};

export const remove = async (artID) => request.remove(`${baseUrl}/${artID}`);



export const getByUser = async (userID) => {
    const queries = new URLSearchParams({
        where: `_ownerId="${userID}"`
    });

    const response = await fetch(`${baseUrl}?${queries}`);
    
    if (!response.ok) {
        throw new Error(`Error fetching user art: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
};