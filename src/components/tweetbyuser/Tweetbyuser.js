import React, { useState, useEffect } from 'react';
import useStyles from '../home/style';
import Header from '../header/Header';
import { Divider } from '@material-ui/core';
import Tweetlist from '../home/components/tweetlist';
import PersonIcon from '@material-ui/icons/Person';
import Axios from 'axios';
import { getalltweets } from '../../api/Apitweets';

const Tweetbyuser = (props) => {
    const [tweets, setTweets] = useState([]);
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
    return (<div className={classes.root}>
        <Header title={props.match.params.users} icon={<PersonIcon />} />
        <Divider className={classes.divider}></Divider>
        <Tweetlist data={tweets} />


    </div>);
}

export default Tweetbyuser;