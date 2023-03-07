import axios from "axios";

const API_URL = "http://0.0.0.0:8000";

class AuthService {
  async login(username: any, password: any) {
    const payload = new FormData();
    payload.append("username", username);
    payload.append("password", password);
    const response = await axios.post(`${API_URL}/token`, payload);
    return response;
  }
  async fetchSomething() {}
}

export { AuthService };
