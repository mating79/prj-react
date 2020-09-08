import React, { useState } from 'react';
import useStyles from '../style';
import { Grid, Button, IconButton } from '@material-ui/core';
import classnames from 'classnames';
import Axios from 'axios';
import { postnewtweetrequest } from '../../../api/Apitweets';
const Newtweet = () => {
    const [txt, setTxt] = useState('')
    const newtweetclick = () => {
        const data = {
            id: Math.floor(Math.random() * 1000),
            'sender': { "name": "matin", "id": "matin.gs@", "img": "/images/t1.jpg" },
            "text": txt,
            "likes": Math.floor(Math.random() * 100)
        }

        postnewtweetrequest(data, (isok) => {
            if (!isok)
                return alert("نشد")
            alert("Done !")

        })

    };
    const classes = useStyles()

    return (
        <div className={classes.newtweet}>
            <Grid container>
                <img src="images/t1.jpg" alt="" className={classes.newtweetimg} />
                <input onChange={event => setTxt(event.target.value)} placeholder={"توییت کن ..."} className={classnames(classes.input, "editable")} />
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