import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from './style';
import { Grid, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { gethashtags } from '../../api/Apitweets';
import { useTweetDispatch, useTweetState,sethashTagList } from '../../context/TweetContext';
import { toast } from 'react-toastify';

const Rightsidebar = () => {

    const classes = useStyle();
    const {hashTags:hashtags} = useTweetState();
    const hashTagDispatch = useTweetDispatch();
    // const [hashtags, setHashtags] = useState([])
    useEffect(() => {
        gethashtags  ((isok, data) => {
            if (!isok) {
                toast.error(data.message);
            }else{
                sethashTagList(hashTagDispatch,data);
                
            }
        });
    }, [])
    return (<div className={classes.root}>
        <Link to={"/"}>
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item> <img src="/images/logo.png" alt="" /></Grid>
                <Grid item>
                    <Typography component="h1" className={classes.logotype}>
                        توییتر فارسی
        </Typography>

                </Grid>

            </Grid>
        </Link>
        <Typography className={classes.hashtagtitle}>
            داغ ترین هشتگ ها
        </Typography>

        <Grid container direction={"column"} alignItems={"center"} >
            {hashtags.map(item => <ButtonBase className={classes.hashtagparent}>
                <Link to={"/tweetbyhashtag/" + item.text} style={{ width: "100%" }}>
                    <Grid item container direction={"row"}>
                        <Grid item> <img src="/images/hashtag.png" alt="" /></Grid>
                        <Grid item>
                            <Typography className={classes.hashtagtext}>
                                {item.text}
                            </Typography>
                        </Grid>
                    </Grid>
                </Link>
            </ButtonBase>
            )}

        </Grid>

    </div >);
}

export default Rightsidebar;