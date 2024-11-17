import axios from "axios";

class UserService {
    static BASE_URL = "http://localhost:8080";

    static async login(email, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/Login`, { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            }
            return response.data;
        } catch (err) {
            console.error("Error while logging in", err);
            throw err;
        }
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    static async register(userData) {
        try {
            const response = await axios.post(
                `${UserService.BASE_URL}/Register`,
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (err) {
            console.error("Error while registering", err);
            throw err;
        }
    }

    static async refreshToken() {
        try {
            const refreshToken = this.getRefreshToken();
            const response = await axios.post(`${UserService.BASE_URL}/refresh-token`, { token: refreshToken });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data.token;
        } catch (err) {
            console.error("Error refreshing token", err);
            throw err;
        }
    }

    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
}

export default UserService;