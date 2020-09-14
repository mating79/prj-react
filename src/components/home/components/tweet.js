import React from 'react';
import useStyles from '../style';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { likeTweet, setTweetText, useTweetDispatch } from '../../../context/TweetContext';
import { likeTweetRequest } from '../../../api/Apitweets';
import { toast } from 'react-toastify';
const renderTweet = (text) => {
    return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>") };
}

const Tweet = ({ data }) => {
    const reTweetDispatch = useTweetDispatch();

    const retweetClick = () => {
        setTweetText(reTweetDispatch, data.text)
    }
    const classes = useStyles();
    const getimage = () => {
        if (data.user.image)
            return data.user.image;
        else return "images/add-user.png";
    }
    const handleLike = () => {
        likeTweetRequest(data._id, (isok, data) => {
            if (!isok)
                return toast.error("لایک نشد!")
            likeTweet(reTweetDispatch, data._id)


        })
    }
    return (<div className={classes.newtweet}>
        <Grid container >

            <img src={getimage()} alt="" className={classes.tweetlistimg} />

            <Grid item container direction={"column"} style={{ flex: 1, marginRight: "8px" }}>
                <Grid item container>
                    <Typography className={classes.tweetlistname}> {data.user.name}</Typography>
                    <Typography className={classes.tweetlistid}>{data.user.id}</Typography>
                </Grid>

                <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetlisttext} component={"p"} />
                {
                    data.image &&
                    <div>
                        <div style={{ backgroundImage: `url(${data.image})` }} className={classes.imagepath}>   </div>
                    </div>
                }
            </Grid>
        </Grid>
        <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
            <IconButton onClick={retweetClick} className={classes.newtweetbtnimg}>
                <img src="/images/retweet.png" alt="" />
            </IconButton>
            <IconButton onClick={handleLike} className={classes.newtweetbtnimg}>
                <FavoriteBorderIcon>

                </FavoriteBorderIcon>
            </IconButton>
            <Typography className={classes.likecount}>{data.likes}</Typography>
        </Grid>
    </div>);
}

export default Tweet;