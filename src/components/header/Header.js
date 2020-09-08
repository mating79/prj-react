import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import useStyles from './style';
const Header = ({ title, icon }) => {
    const classes = useStyles();
    return (<div className={classes.header}>
        {icon}
        <Typography className={classes.headertitle}>
            {title}
        </Typography>
    </div>);
}

export default Header;