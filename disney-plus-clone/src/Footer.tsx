
import { makeStyles } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles(() => ({
   container: {
       height: "250px",
       textAlign:"center"
   },
   text: {
       paddingTop:"180px",
       color: "white"
   }
}));


export function Footer(): React.ReactElement{
   const classes = useStyles();
  
   return (
       <div className={classes.container}>
           <p className={classes.text}>
               Disney Plus Clone &copy; 2023
           </p>
       </div>
   )
}


export default Footer





