import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/a2-e36aa/us-central1/api",
});

export default instance;
