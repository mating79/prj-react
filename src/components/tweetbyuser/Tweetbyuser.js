import React, { useState, useEffect } from 'react';
import useStyles from '../home/style';
import Header from '../header/Header';
import { Divider, Typography } from '@material-ui/core';
import Tweetlist from '../home/components/tweetlist';
import PersonIcon from '@material-ui/icons/Person';
import Axios from 'axios';
import { getalltweets, getTweetByUserRequest } from '../../api/Apitweets';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { useLocation } from 'react-router-dom';


const Tweetbyuser = (props) => {
    const [tweets, setTweets] = useState([]);
    const locaion = useLocation();
    // const {tweetList:tweets} = useTweetState();
    // const tweetDispatch = useTweetDispatch();
    useEffect(() => {
        getTweetByUserRequest(props.match.params.id,(isok, data) => {
            if (!isok) {
                alert(data.message);
            }else{
                setTweets(data)
            }
        });
    }, [locaion])

    const classes = useStyles();
    return (<div className={classes.root}>
        <Header title={props.match.params.name} icon={<PersonIcon />} />
        <Divider className={classes.divider}></Divider>
        {tweets.length===0 &&
        <Typography>کاربر مورد نظر شما توویتی ندارد !</Typography>
        }
        <Tweetlist data={tweets} />


    </div>);
}

export default Tweetbyuser;