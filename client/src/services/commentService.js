
const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (artID) => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const result = await response.json();
    const comments = Object.values(result);
    
    if (artID) {
        return comments.filter(comment => comment.artID === artID);
    }

    return comments;
};


export const create = async (artID, commentInfo) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ artID, ...commentInfo })
    });

    const result = await response.json();
    return result;
};
