const commentsBaseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (artID) => {
    const response = await fetch(commentsBaseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const result = await response.json();
    return Object.values(result).filter(comment => comment.artID === artID);
};

export const create = async (artID, commentData) => {
    const response = await fetch(commentsBaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...commentData, artID })
    });

    const result = await response.json();
    return result;
};
