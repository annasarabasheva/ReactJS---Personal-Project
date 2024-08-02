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

