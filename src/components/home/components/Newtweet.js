import React, { useState, useRef } from 'react';
import useStyles from '../style';
import { Grid, Button, IconButton } from '@material-ui/core';
import classnames from 'classnames';
import Axios from 'axios';
import { postnewtweetrequest } from '../../../api/Apitweets';
import { toast } from 'react-toastify';
import { useTweetState,useTweetDispatch } from '../../../context/TweetContext';
import { setTweetText as setTxt } from '../../../context/TweetContext'
const Newtweet = ({ updateTweets }) => {
    const { tweetText: txt } = useTweetState();
    const tweetDispatch = useTweetDispatch();
    // const [txt, setTxt] = useState();
    const [img, setImg] = useState();
    const [imgPath, setImgPath] = useState();


    const inputFile = useRef();


    const newtweetclick = () => {
        const tweetText = txt;
        if (!tweetText)
            return;
        const formData = new FormData();
        formData.append("text", txt);
        if (img)
            formData.append("image", img);

        postnewtweetrequest(formData, (isok, data) => {
            if (!isok)
                return toast.error(data);
            toast.success("Done !");
            updateTweets();
            setTxt(tweetDispatch,"");
            setImgPath();
            setImg();


        })

    };
    const classes = useStyles()
    const getimage = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined') { return localStorage.getItem("image") }
        return "images/th.jpg";
    }
    const Changeimg = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImgPath(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    const selectimg = () => {
        inputFile.current.click();
    }


    return (
        <div className={classes.newtweet}>
            <Grid container>
                <img src={getimage()} alt="" className={classes.newtweetimg} />
                <input value={txt} onChange={event => setTxt(tweetDispatch,event.target.value)} placeholder={"توییت کن ..."} className={classnames(classes.input)} />
                <input type={"file"} style={{ display: "none" }} ref={inputFile} onChange={Changeimg} />
            </Grid>
            {
                imgPath &&

                <div>
                    <div style={{ backgroundImage: `url(${imgPath})` }} className={classes.imagepath}>   </div>
                </div>
            }

            <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
                <Button onClick={newtweetclick} variant={"contained"} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newtweetbtnimg} onClick={selectimg}>
                    <img src="images/tweetpic.png" alt="" />
                </IconButton>
            </Grid>
        </div>);
}

export default Newtweet;