import axios from 'axios';

export const getDummyPosts = ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}