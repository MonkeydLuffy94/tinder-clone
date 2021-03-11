import axios from "axios";

const instance = axios.create({
  baseURL: "https://md-tinder-clone-backend.herokuapp.com/",
});

export default instance;
