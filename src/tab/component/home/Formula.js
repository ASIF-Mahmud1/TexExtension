import React, {Fragment, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import MathJax from 'react-mathjax-preview'
import {Button,Paper, InputBase,Divider,IconButton, TextField, Typography} from '@material-ui/core'
import {FindReplaceRounded ,SaveOutlined } from '@material-ui/icons';



export default function  Formula ({formula, handleParentState}) { 
const {handleChange,handleEditSymbols   }= handleParentState
const classes = useStyles()
return (
 
        <div className={classes.container}>
           <div className={classes.box} >
              <TextField className={classes.input} value= {formula.content} onChange={(e) => { handleChange(formula._id, e.target.value) }}   />
              <IconButton onClick={()=>handleEditSymbols(formula._id)}>
                {
                  formula.findAndReplaceMode=== false ? <FindReplaceRounded /> :  <SaveOutlined /> 
                }
              </IconButton>
           </div>

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
    box:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',

      height: "20%",
      width: '50%',
      border: "3px solid grey",
      borderRadius: "4px",
      marginRight:100
    },
    input: {
     width: "2px",
     height: "60px",
     width: '90%',
     padding: "10px 20px",
     fontFamily: "Helvetica, sans-serif",
     fontWeight: "bold",
     fontSize: "16px",
     borderRadius: "4px"
      },
  
  });