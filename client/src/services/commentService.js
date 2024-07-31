const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (gameID) => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const result = await response.json();
    return Object.values(result);
};

export const create = async (artID, commentData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
    });

    const result = await response.json();
    return result
}
