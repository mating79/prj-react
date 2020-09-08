import React, { useEffect,useState } from 'react';
import useStyles from './style';
import Header from '../header/Header';
import { Divider } from '@material-ui/core';
import Newtweet from './components/Newtweet';
import Tweetlist from './components/tweetlist';
import HomeIcon from '@material-ui/icons/Home';
import Axios from 'axios';
import { getalltweets } from '../../api/Apitweets';



const Home = () => {
    const classes = useStyles();
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



    return (<div className={classes.root}>
        <Header title={"خانه"} icon={<HomeIcon />} />
        <Divider className={classes.divider}></Divider>
        <Newtweet />
        <Tweetlist data={tweets} />


    </div>);
}

export default Home;