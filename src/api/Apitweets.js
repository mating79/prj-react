import  {getaxiosinstance, getaxiosinstanceApi}  from './Api'
export const getalltweets = (callback) => {

    getaxiosinstanceApi().post("getAllTweet")
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);

        })
};
export const gethashtags=(callback)=>{
getaxiosinstance().get('/hashtags')
.then(response =>{
const data = response.data;
callback(true,data)
})
.catch(error=>{
callback(false,error)
});
}
export const getusers = (callback)=>{
    getaxiosinstance().get("/users")
    .then(Response => {
        const data = Response.data;
        callback(true, data);
    })
    .catch(error => {
        console.log(error);
        callback(false, error);

    })
};
export const postnewtweetrequest = (data,callback)=>{
    getaxiosinstanceApi().post('newTweet', data)
    .then(Response => {
        const data = Response.data;
        callback(true, data);
    })
    .catch(error => {
        console.log(error);
        callback(false, error);

    })
};
