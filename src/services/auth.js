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

  async getUser(){
    try{ const response = await axios.get("/user"); // Ensure the endpoint is correct
      return response.data;} catch(err){
        console.log(err)
      }
   
  }
};

export default authService;  