import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from './style';
import { Grid, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { gethashtags } from '../../api/Apitweets';

const Rightsidebar = () => {

    const classes = useStyle();
    const [hashtags, setHashtags] = useState([])
    useEffect(() => {
        gethashtags  ((isok, data) => {
            if (!isok) {
                alert(data.message);
            }else{
                setHashtags(data)
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
                <Link to={"/tweetbyhashtag/" + item} style={{ width: "100%" }}>
                    <Grid item container direction={"row"}>
                        <Grid item> <img src="/images/hashtag.png" alt="" /></Grid>
                        <Grid item>
                            <Typography className={classes.hashtagtext}>
                                {item}
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