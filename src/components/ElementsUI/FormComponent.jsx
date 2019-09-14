import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    formPadding:{
        padding: 20,
    }
}))

const FormComponent = ({...custom}) => {
    const classes= useStyles();
    return (
        <form className={classes.formPadding} {...custom} />
    )
}

export default FormComponent;