import React, { useEffect,useState } from 'react';
import useStyles from './style';
import Header from '../header/Header';
import { Divider } from '@material-ui/core';
import Newtweet from './components/Newtweet';
import TweetList from './components/tweetlist';
import HomeIcon from '@material-ui/icons/Home';
import Axios from 'axios';
import { getalltweets } from '../../api/Apitweets';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';



const Home = () => {
    const classes = useStyles();
    const {tweetList : tweets} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    // const [tweets,setTweets]=useState([]);
    useEffect(() => {
        updateTweets();
    }, []);


    const updateTweets = ()=>{
        getalltweets((isok, data) => {
            if (!isok) {
                return alert(data.message);
            }else{
                setTweetList(tweetDispatch,data)
            }
        });
    }



    return (<div className={classes.root}>
        <Header title={"خانه"} icon={<HomeIcon />} />
        <Divider className={classes.divider}></Divider>
        <Newtweet updateTweets={updateTweets}/>
        <TweetList data={tweets} />


    </div>);
}

export default Home;