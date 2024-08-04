import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/artComments';


export const getAll = async (artID) => {
    const queries = new URLSearchParams({
        where: `artID="${artID}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${queries}`);
    
    return result;
};


export const create = async (artID, text) => {
    const newComment = await request.post(baseUrl, {
        artID,
        text,
    });

    return newComment;
};