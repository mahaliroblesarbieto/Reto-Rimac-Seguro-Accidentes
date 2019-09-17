import React from 'react';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import {  withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);

export default function ButtonComponent({content, type}) {
  return (
      <ColorButton variant="contained" color="primary" fullWidth type={type}>
        {content}
      </ColorButton>
      
  );
}