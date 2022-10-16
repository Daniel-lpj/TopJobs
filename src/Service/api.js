import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `http://localhost:8080/InfoJobs/rest`?.toString(),
});
