import axios from "axios"

class UserService {
    static BASE_URL = "http://localhost:8080";

    static async login(email, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/Login`, { email, password });
            console.log(response);
        } catch (err) {
            console.log("Error while logging in");
        }
    }

    static async register(userData) {
        try {
            const response = await axios.post(
                `${UserService.BASE_URL}/Register`,
                userData,
                {
                    headers: {
                        // Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (err) {
            console.log(err.message);
        }
    }
}

export default UserService;

