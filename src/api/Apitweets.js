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
export const getTweetByHashTagRequest = (hashTag,callback) => {

    getaxiosinstanceApi().post("getAllTweet",{hashTag})
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        })
        .catch(error => {
            console.log(error);
            callback(false, error);

        })
};
export const getTweetByUserRequest = (user,callback) => {

    getaxiosinstanceApi().post("getAllTweet",{user})
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
getaxiosinstanceApi().get('/getAllHashTags')
.then(response =>{
const data = response.data;
callback(true,data)
})
.catch(error=>{
callback(false,error)
});
}
export const getusers = (callback)=>{
    getaxiosinstanceApi().get("/getAllUser")
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
export const likeTweetRequest = (id,callback)=>{
    getaxiosinstanceApi().get('likeTweet/'+id)
    .then(Response => {
        const data = Response.data;
        callback(true, data);
    })
    .catch(error => {
        console.log(error);
        callback(false, error);

    })
};

