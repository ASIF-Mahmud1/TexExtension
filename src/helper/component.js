  
  import {CopyToClipboard} from 'react-copy-to-clipboard';
  import { IconButton} from '@material-ui/core';
  import {AddCircle} from '@material-ui/icons';
  import MathJax from 'react-mathjax-preview'
  import { makeStyles } from '@material-ui/styles';

  
  const RenderSuggestion =({suggestion})=> {
    const classes = useStyles()

    return (
      <div className={classes.container}>
      <span>{suggestion.title} - <MathJax math= {"`" + suggestion.content + "`"} /></span>
      <CopyToClipboard text={"`"+suggestion.content+"`"}
                onCopy={() =>{console.log("copied in clipboard")} }>
            <IconButton>
               <AddCircle/>
            </IconButton>
            </CopyToClipboard>
      </div>
    );
  }

  const useStyles = makeStyles({
    container: {
        display:'flex'
    },
   
    // add other styling here...
  });

  export {
    RenderSuggestion
  }