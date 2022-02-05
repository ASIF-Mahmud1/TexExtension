import React, {useState,useEffect} from 'react'

import {Button,Typography,Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table,TextField} from '@material-ui/core'

import { sammpleFormula } from '../../sample/formulae';
import MathJax from 'react-mathjax-preview'
import {findUnique,replaceAll,doWhichKey,countString} from '../../helper/helper'

export default function BasicTable() {
  const [rows,setRows]= useState(sammpleFormula)
  const [editMode,setEditMode]= useState('')
 const handleChange=(_id,value)=>{
   console.log(_id, value);
   const dollarFound= countString(value,"$");
   console.log("dollar found ",dollarFound);
   if(dollarFound==1)
   {
      const firstIndexOfDollar= value.indexOf('$')
   }

   if(dollarFound==2)
   {
      const firstIndexOfDollar= value.indexOf('$')
      const lastIndexOfDollar= value.lastIndexOf('$')
      const mahQuery= value.substring(firstIndexOfDollar+1,lastIndexOfDollar)
      console.log("Copy this shit ",rows[mahQuery].content);
      
      console.log("See ",value.slice(0, firstIndexOfDollar));
   
      var txt2 = value.slice(0, firstIndexOfDollar) +rows[mahQuery].content + value.slice(lastIndexOfDollar+1);

      console.log("and result is ", txt2);
      var indexToModify = rows.findIndex(i => i._id === _id);
      let copyRows=[...rows]
      if (indexToModify !== -1) 
      {
          copyRows[indexToModify]['content'] = txt2;
      }
     setRows(copyRows)
   }
   else 
   {
      var indexToModify = rows.findIndex(i => i._id === _id);
      let copyRows=[...rows]
      if (indexToModify !== -1) 
      {
          copyRows[indexToModify]['content'] = value;
      }
     setRows(copyRows)
   }  


 }

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">Preview</TableCell>
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">
                  <TextField multiline={true} style={{width:500}} value=  {row.content}  onChange={(e)=>{handleChange(row._id,e.target.value)}}/>
                 
                  </TableCell>
              <TableCell align="right">
                  <span> <MathJax math={ "`"+row.content+"`" } /></span>
                  </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
    
     
    </TableContainer>
  );
}