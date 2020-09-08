import React,{useState,useEffect} from 'react';
import useStyles from '../home/style';
import Header from '../header/Header';
import {Divider} from '@material-ui/core';
import Tweetlist from '../home/components/tweetlist';
import Axios from 'axios';
import { getalltweets } from '../../api/Apitweets';

const Tweetbyhashtag = (props) => {
    const [tweets,setTweets]=useState([]);
    useEffect(() => {
        getalltweets((isok, data) => {
            if (!isok) {
                alert(data.message);
            }else{
                setTweets(data)
            }
        });
    }, [])

    const classes = useStyles();
    return ( <div className={classes.root}>
        <Header title={props.match.params.hashtags} icon={<img src="/images/hashtag.png" alt="" />}/>
        <Divider className={classes.divider}></Divider>
        <Tweetlist data={tweets}/>


    </div> );
}
 
export default Tweetbyhashtag;