import Axios from 'axios';
 export const getaxiosinstance = () => {
    return Axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            API_KEY: "slmslmslmslm"
        }
    });
};
export const getaxiosinstanceauth = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            // API_KEY: "slmslmslmslm"
        }
    });
};
export const getaxiosinstanceApi = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
           'x-auth-token':localStorage.getItem('X-auth-token')
        }
    });
};

