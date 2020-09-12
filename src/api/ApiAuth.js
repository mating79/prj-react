import  {getaxiosinstance, getaxiosinstanceauth,getaxiosinstanceApi}  from './Api'
export const loginApi = (user,callback) => {

    getaxiosinstanceauth().post("login",user)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false,error);

        })

};
export const RegisterApi = (person,callback) => {

    getaxiosinstanceauth().post("register",person)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false,error);

        })

};
export const uploadUserPhoto = (photo,callback) => {

    getaxiosinstanceApi().post("uploadUserPhoto",photo)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false,error);

        })

};
