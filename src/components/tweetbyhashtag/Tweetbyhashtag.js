import React, { useState, useEffect } from 'react';
import useStyles from '../home/style';
import Header from '../header/Header';
import { Divider } from '@material-ui/core';
import Tweetlist from '../home/components/tweetlist';
import Axios from 'axios';
import { getalltweets, getTweetByHashTagRequest } from '../../api/Apitweets';
import { toast } from 'react-toastify';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { useLocation } from 'react-router-dom';


const Tweetbyhashtag = (props) => {
    const location = useLocation();


    const { tweetList: tweets } = useTweetState();
    const tweetsDispatch = useTweetDispatch();
    // const [tweets,setTweets]=useState([]);
    useEffect(() => {
        getTweetByHashTagRequest(props.match.params.hashtags, (isok, data) => {
            if (!isok) {
                toast.error(data.message);
            } else {
                setTweetList(tweetsDispatch, data)
            }
        });
    }, [location])

    const classes = useStyles();
    return (<div className={classes.root}>
        <Header title={props.match.params.hashtags} icon={<img src="/images/hashtag.png" alt="" />} />
        <Divider className={classes.divider}></Divider>
        <Tweetlist data={tweets} />


    </div>);
}

export default Tweetbyhashtag;