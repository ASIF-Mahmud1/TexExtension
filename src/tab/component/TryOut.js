import React, {useState,useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {Cancel,Search,Directions} from '@material-ui/icons';
import {IconButton, Divider,InputBase} from '@material-ui/core'
import MathJax from 'react-mathjax-preview'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

const listOfFormulaFromApi=[]

export default function TryOut() {
  const classes = useStyles()

  const [values, setValues] = useState({
      query: '',
      error: ''
  })


const  onSubmit= async()=>{
  const text = await navigator.clipboard.readText();
   const result = values.query+ text
  setValues({ ...values, ["query"]: result})
}

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

 

  return (
      <Card className={classes.card}>
         <Typography variant="h6" className={classes.title}>
           Change formula !
          </Typography>
        <CardContent >
         
                <InputBase
                multiline={true}
                // style={{height:200,width:500}}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find formula"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={values.query} onChange={handleChange('query')}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
              <Search />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            
                <Button onClick={onSubmit}><Typography>Submit</Typography></Button>
             
    
            </IconButton>
          <Typography>
               <span><MathJax math={values.query } /></span>
          </Typography>
         
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    )
}
