import React from 'react';
import useStyles from './style';
import Rightsidebar from '../rightsidebar/Rightsidebar';
import { Divider } from '@material-ui/core';
import Leftsidebar from '../leftsidebar/Leftsidebar';

const Layout = (props) => {
    const classes = useStyles();
    return (<div className={classes.root}>
        <Rightsidebar />
        <Divider orientation={"vertical"} className={classes.divider} />
        <div className={classes.content}>
           {props.children}
        </div>
        <Divider orientation={"vertical"} className={classes.divider} />
        <Leftsidebar />
    </div>
    );
}

export default Layout;