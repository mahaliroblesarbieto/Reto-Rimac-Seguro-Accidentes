import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    width:{
        width: "340px",
        margin: 0 ,
    }
}))

const MobileWidth = ({...custom}) => {
    const classes= useStyles();
    return (
        <div className={classes.width} {...custom}></div>
    )
}

export default MobileWidth;