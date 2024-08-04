import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/arts'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (artID) => {
    const result = await request.get(`${baseUrl}/${artID}`, );

    return result;
}


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