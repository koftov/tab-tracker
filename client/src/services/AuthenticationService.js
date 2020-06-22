import api from "@/services/Api";
import Api from "./Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};

// Authentication.register({
//   email: 'test@gmail.com',
//   password: '123456',
// });
