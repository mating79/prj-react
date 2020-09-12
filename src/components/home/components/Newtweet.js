import React, { useState } from 'react';
import useStyles from '../style';
import { Grid, Button, IconButton } from '@material-ui/core';
import classnames from 'classnames';
import Axios from 'axios';
import { postnewtweetrequest } from '../../../api/Apitweets';
import { toast } from 'react-toastify';
const Newtweet = ({ updateTweets }) => {
    const [txt, setTxt] = React.useState();



    const newtweetclick = () => {
        const tweetText = txt;
        if (!tweetText)
            return;
        const data = {
            "text": txt,
        }

        postnewtweetrequest(data, (isok, data) => {
            if (!isok)
                return toast.error(data);
            toast.success("Done !");
            updateTweets();
            setTxt("");

        })

    };
    const classes = useStyles()
    const getimage = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined') { return localStorage.getItem("image") }
        return "images/th.jpg";
    }


    return (
        <div className={classes.newtweet}>
            <Grid container>
                <img src={getimage()} alt="" className={classes.newtweetimg} />
                <input value={txt} onChange={event => setTxt(event.target.value)} placeholder={"توییت کن ..."} className={classnames(classes.input)} />
            </Grid>
            <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
                <Button onClick={newtweetclick} variant={"contained"} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newtweetbtnimg}>
                    <img src="images/tweetpic.png" alt="" />
                </IconButton>
            </Grid>
        </div>);
}

export default Newtweet;