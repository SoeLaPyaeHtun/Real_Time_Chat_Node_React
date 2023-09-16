import axios from "axios";


export const baseurl = "http://localhost:4000/api/"

export const api = axios.create({
    baseURL: baseurl
})