const baseUrl = 'http://localhost:3030/users';

const fetchWithAuth = (url, options = {}) => {
    const token = JSON.parse(localStorage.getItem('auth'))?.accessToken;
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
        return result;
    }

    throw new Error('Login failed');
};

export const register = async (email, password, username) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
    });

    const result = await response.json();
    if (response.ok) {
        result.username = username;
        return result;
    }

    throw new Error('Registration failed');
};

export const logout = async () => {
    await fetchWithAuth(`${baseUrl}/logout`, {
        method: 'GET',
    });
    localStorage.removeItem('auth');
};
