import React, {useState,useEffect} from 'react'

import {Button,Typography,Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table} from '@material-ui/core'

import { sammpleFormula } from '../../sample/formulae';
import MathJax from 'react-mathjax-preview'

export default function BasicTable() {
  const [rows,setRows]= useState(sammpleFormula)
const [pageNumber,setPageNumber]= useState(1)
const [showNextButton,setShowNextButton]= useState(false)



 const clickNextBtn=(value)=>{
  setPageNumber((current)=> current+value)
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
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">
                  <span> <MathJax math={row.content} /></span>
                  </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
    
     
    </TableContainer>
  );
}