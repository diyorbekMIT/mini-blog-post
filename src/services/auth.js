import axios from "./axios";

const authService = {
  async useRegister(user) {
    const response = await axios.post("/users", { user });
    return response.data;
  },

  async useLogin(user) {
    const response = await axios.post("/users/login", { user }); // Ensure the endpoint is correct
    return response.data;
  },
};

export default authService;