import React, {Fragment, useEffect, useState } from 'react'
import {Button,Typography,TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import MathJax from 'react-mathjax-preview'

export default function  Formula ({formula}) { 

const classes = useStyles()
return (
 
        <div className={classes.container}>
           
           <TextField className={classes.input} value= {formula.content}   />
           <MathJax math= {"`" + formula.content + "`"} />

        </div>

)

}

const useStyles = makeStyles({
    container: {
      display:'flex',
      alignItems:'center',
      marginTop:40
    },
    label:{
        marginRight:10
    },
    input: {
       
        height: "60px",
        width: '40%',
        padding: "10px 20px",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        border: "1px solid #aaa",
        borderRadius: "4px",
        marginRight:20
      },
  
  });