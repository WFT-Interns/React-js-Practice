import axios from "axios";
export const Instance=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: { 'Authorization': 'Bearer ' } 
});
export const axiosInstance=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: { 'Authorization': 'Bearer ' } 
});