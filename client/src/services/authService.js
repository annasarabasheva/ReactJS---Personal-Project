const baseUrl = 'http://localhost:3030/users';

const fetchWithAuth = (url, options = {}) => {
    const token = localStorage.getItem('authToken');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['X-Authorization'] = token;
    }

    return fetch(url, {
        ...options,
        headers,
    }).then(res => {
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    });
};

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (response.ok) {
        localStorage.setItem('authToken', result.accessToken);
    }

    return result;
};

export const register = async (email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (response.ok) {
        localStorage.setItem('authToken', result.accessToken);
    }

    return result;
};

export const logout = async () => {
    await fetchWithAuth(`${baseUrl}/logout`, {
        method: 'GET',
    });
    localStorage.removeItem('authToken');
};
