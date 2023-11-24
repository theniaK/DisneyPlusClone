import React, { useState } from 'react'
import { AppBar, Card, CardMedia, TextField, Toolbar, Typography, makeStyles } from '@material-ui/core';
import MovieCards from './MovieCards';


const useStyles = makeStyles(() => ({
   container: {
       height: "250px",
   },
   text: {
       color: "white",
       textAlign: "center"
   },
   menuItems:{
       paddingLeft: "100px"
   },
   menu:{
       position: "absolute",
       top: "20px",
       left: "20px",
       marginRight: "1000px",
       marginTop:"-150px"
   },
   appBar:{
       background: "black",
   }
}));


export function Header(): React.ReactElement{
   const classes = useStyles();
   const [searchValue, setSearchValue] = useState("");
  
   const handleSearchChange = (event: any) => {
       setSearchValue(event.target.value);
       console.log(searchValue)
     };


   return (
       <div>
           <AppBar position="static" className={classes.appBar}>
               <Toolbar>
                   <Card>
                       <CardMedia
                           component="img"
                           height="120"
                           width="120"
                           image="https://variety.com/wp-content/uploads/2022/03/DisneyPlus-Logo.jpg?w=1000&h=563&crop=1&resize=1000%2C563"
                           alt="Disney+ Logo"
                       />
                   </Card>
                   <a href="/your-link-url" onClick={()=>{}} style={{ textDecoration: 'none', color: 'inherit' }}>
                       <Typography className={classes.menuItems}>
                       Home
                       </Typography>
                   </a>
                   <a href="/your-link-url" onClick={()=>{}} style={{ textDecoration: 'none', color: 'inherit' }}>
                       <Typography className={classes.menuItems}>
                       Watchlist
                       </Typography>
                   </a>
                   <a href="/your-link-url" onClick={()=>{}} style={{ textDecoration: 'none', color: 'inherit' }}>
                       <Typography className={classes.menuItems}>
                       Original
                       </Typography>
                   </a>
                   <a href="/your-link-url" onClick={()=>{}} style={{ textDecoration: 'none', color: 'inherit' }}>
                       <Typography className={classes.menuItems}>
                       Movies
                       </Typography>
                   </a>
                   <a href="/your-link-url" onClick={()=>{}} style={{ textDecoration: 'none', color: 'inherit' }}>
                       <Typography className={classes.menuItems}>
                       Series
                       </Typography>
                   </a>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                       <TextField
                           className={classes.menuItems}
                           variant="outlined"
                           size="small"
                           placeholder="Search..."
                           value={searchValue}
                           onChange={handleSearchChange}
                           InputProps={{
                           style: { color: 'white' },
                           }}
                       />
                   </div>
               </Toolbar>
           </AppBar>
           <div className={classes.text}>
               <MovieCards searchValue={searchValue}/>
           </div>
       </div>
   )
}


export default Header

