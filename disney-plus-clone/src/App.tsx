
import { makeStyles } from '@material-ui/core';
import './App.css';
import Footer from './Footer';
import Header from './Header';


const useStyles = makeStyles(() => ({
   container: {
       background: "linear-gradient(180deg, rgba(2,0,36,1) 71%, rgba(2,2,96,1) 100%)",
   },
   text: {
       paddingTop:"100px"
   }
}));


function App() {


const classes = useStyles();
 return (
     <div className={classes.container}>
       <Header/>
       <Footer/>
     </div>
 );
}


export default App;



