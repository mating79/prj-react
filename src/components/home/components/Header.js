import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import useStyles from '../style';
const Header = () => {
    const classes = useStyles();
    return (<div className={classes.header}>
        <HomeIcon/>
        <Typography className={classes.headertitle}>
            خانه
       </Typography>
    </div>);
}

export default Header;