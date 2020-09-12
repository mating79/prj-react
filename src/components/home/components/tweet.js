import React from 'react';
import useStyles from '../style';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid, IconButton, Typography } from '@material-ui/core';
const renderTweet = (text) => {
    return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>") };
}
const Tweet = ({ data }) => {
    const classes = useStyles();
    const getimage = () => {
        if (data.user.image)
           return  data.user.image;
           else return "images/add-user.png";
    }
    return (<div className={classes.newtweet}>
        <Grid container >

            <img src={getimage()} alt="" className={classes.tweetlistimg} />

            <Grid item container direction={"column"} style={{ flex: 1, marginRight: "8px" }}>
                <Grid item container>
                    <Typography className={classes.tweetlistname}> {data.user.name}</Typography>
                    <Typography className={classes.tweetlistid}>{data.user.id}</Typography>
                </Grid>

                <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetlisttext} component={"p"}>


                </Typography>
            </Grid>
        </Grid>
        <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
            <IconButton className={classes.newtweetbtnimg}>
                <img src="/images/retweet.png" alt="" />
            </IconButton>
            <IconButton className={classes.newtweetbtnimg}>
                <FavoriteBorderIcon>

                </FavoriteBorderIcon>
            </IconButton>
            <Typography className={classes.likecount}>{data.likes}</Typography>
        </Grid>
    </div>);
}

export default Tweet;