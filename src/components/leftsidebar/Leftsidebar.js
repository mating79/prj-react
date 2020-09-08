import React, { useEffect, useState } from 'react';
import useStyle from './style';
import { Grid, Typography, Divider, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { getusers } from '../../api/Apitweets';
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
    const [users, setUsers] = useState([])
    useEffect(() => {
        getusers((isok, data) => {
            if (!isok) {
                alert(data.message);
            }else{
                setUsers(data)
            }
        });
    }, [])
    return (<div className={classes.root}>
        <Grid container direction={"row-reverse"}>
            <img className={classes.aboutimage} src="/images/t1.jpg" alt="" />
            <Grid item container direction={"column"} className={classes.profile}>
                <Typography className={classes.profname}>
                    متین گیوی
                </Typography>
                <Typography className={classes.profid}>
                    matin.givi
                </Typography>
            </Grid>
        </Grid>
        <Grid item container direction={"column"} className={classes.beststitle}>
            <Typography className={classes.bests}>
                بهترین توییت کنندگان
            </Typography>
            <Divider orientation={"horizontal"} style={{ marginLeft: "-24px", marginRight: "-24px" }} />
            {users.map((item, index) => {
                return (<Link to={"/tweetbyuser/" + item.name} style={{ width: '100%' }}>

                    <Tweetcomponents name={item.name} id={item.id} img={item.img} />
                    {index !== users.length -1 &&
                        <Divider style={{ marginLeft: "-24px", marginRight: "-24px" }} />
                    }


                </Link>)
            })}

        </Grid>
    </div>);
}

export default Leftsidebar;