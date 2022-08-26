import axios from "axios";
import environement from "../config/environement";

export class Ajax
{
    static get(url)
    {
        return axios.get(`${environement.apiUrl}/${url}`);
    }

    static post(url, data)
    {
        return axios.post(`${environement.apiUrl}/${url}`, data);
    }

    static put(url, data)
    {
        return axios.put(`${environement.apiUrl}/${url}`, data);
    }

    static delete(url)
    {
        return axios.delete(`${environement.apiUrl}/${url}`);
    }
}
