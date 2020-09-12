import React, { useEffect, useState, useRef } from 'react';
import useStyle from './style';
import { Grid, Typography, Divider, ButtonBase, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Axios from 'axios';
import { getusers } from '../../api/Apitweets';
import { uploadUserPhoto } from '../../api/ApiAuth';
import { toast } from 'react-toastify';
const Tweetcomponents = ({ name, id, img }) => {
    const classes = useStyle();
    return <ButtonBase style={{ width: '100%' }} >
        <Grid container direction={"row"}>
            <img className={classes.aboutimage2} src={img} alt="" />
            <Grid item container direction={"column"} className={classes.profile}>
                <Typography className={classes.profname2}>
                    {name}
                </Typography>
                <Typography className={classes.profid2}>
                    {id}
                </Typography>
            </Grid>
        </Grid>
    </ButtonBase>
}

const Leftsidebar = () => {

    const classes = useStyle();
    const [users, setUsers] = useState([]);
    const [imagefile, setImagefile] = useState();
    const [imagePath, setImagePath] = useState();

    const inputRef = useRef();


    useEffect(() => {
        getusers((isok, data) => {
            if (!isok) {
                alert(data.message);
            } else {
                setUsers(data)
            }
        });
    }, [])

    const getimage = () => {
        if(imagePath){return imagePath}
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined') { return localStorage.getItem("image") }
        return "images/add-user.png";
    }
    const handleuserprofile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImagefile(e.target.files[0])
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            setImagePath(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
        const formData = new FormData();
        formData.append("image",e.target.files[0])
        uploadUserPhoto(formData,(isok,data)=>{
            if(!isok){toast.error(data)};
            toast.success('عکس شما با موفقیت آپلود شد')
            localStorage.setItem('image',data.imagePath)
        })
    }

    return (<div className={classes.root}>
        <Grid container direction={"row-reverse"}>
            <ButtonBase onClick={() => { inputRef.current.click() }}> <img className={classes.aboutimage} src={getimage()} alt=" " /> </ButtonBase>
            <Grid item container direction={"column"} className={classes.profile}>
                <Typography className={classes.profname}>
                    {localStorage.getItem("name")}
                </Typography>
                <Typography className={classes.profid}>
                    {localStorage.getItem("username")}
                </Typography>
            </Grid>
            <Button className={classes.exitbutton} onClick={() => { localStorage.clear(); window.location.reload() }} >خروج</Button>
            <input ref={inputRef} type={'file'} style={{ display: "none" }} onChange={handleuserprofile}></input>
        </Grid>
        <Grid item container direction={"column"} className={classes.beststitle}>
            <Typography className={classes.bests}>
                بهترین توییت کنندگان
            </Typography>
            <Divider orientation={"horizontal"} style={{ marginLeft: "-24px", marginRight: "-24px" }} />
            {users.map((item, index) => {
                return (<Link to={"/tweetbyuser/" + item.name} style={{ width: '100%' }}>

                    <Tweetcomponents name={item.name} id={item.id} img={item.img} />
                    {index !== users.length - 1 &&
                        <Divider style={{ marginLeft: "-24px", marginRight: "-24px" }} />
                    }
                </Link>)
            })}

        </Grid>

    </div>);
}

export default Leftsidebar;