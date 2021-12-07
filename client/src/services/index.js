import axios from "axios";
require('dotenv').config()

const server = axios.create({
    baseURL:'http://localhost:5000/api/'
});
server.defaults.headers.common['Authorization'] = localStorage.getItem('token')
export const userService ={
    signup: data=> server.post('user/signup', data),
    login: data=> server.post('user/login', data)
}

export const listService = {
    getListData: ()=> server.get('list')
}

export const graphService = {
    getGraphData: ()=> server.get('graph')
}
export default server;