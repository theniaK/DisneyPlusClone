import { Card, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


const useStyles = makeStyles(() => ({
   cardContainer: {
       marginTop: "50px",
       marginLeft: "100px",
       display: 'flex',
       gap: '20px',
       overflowX: 'auto',
   },
   gridContainer: {
       width: "100%",
       margin: 0,
   },
   card: {
       height: "250px",
       width: "250px",
   },
   text: {
       textAlign: "center",
       fontSize: "12px",
       fontStyle: "italic"
   }
}));


export function MovieCards(props: any): React.ReactElement {
   const { searchValue } = props;
    const classes = useStyles();
   const [jsonData, setJsonData] = useState<any[]>([
     { id: 1, title: 'I know what you did last summer', image: 'https://upload.wikimedia.org/wikipedia/en/a/a2/I_Know_What_You_Did_Last_Summer.jpg' },
     { id: 2, title: 'Titanic', image: 'https://image.gala.de/21540762/t/BI/v8/w1440/r0/-/titanic-film.jpg' },
     { id: 3, title: 'Avatar', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg' },
     { id: 4, title: 'The Avengers', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg' },
     { id: 5, title: 'I Am Legend', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg' },
     { id: 6, title: 'The Wolf of Wall Street', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg' },
     { id: 7, title: 'Interstellar', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg' },
     { id: 8, title: 'Game of Thrones', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg' },
     { id: 9, title: 'Vikings', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg' },
     { id: 10, title: 'Power', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg' },
     { id: 12, title: 'Narcos', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg' },
     { id: 13, title: 'Breaking Bad', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg' }
   ]);
    function getByTitle(letter: string) {
     return jsonData.filter((movie) =>
       movie.title.toLowerCase().includes(letter.toLowerCase())
     );
   }
    useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('movies.json');
         if (!response.ok) {
           throw new Error('Failed to fetch');
         }
         const data = await response.json();
         setJsonData(data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
      fetchData();
   }, []);
    return (
       <div className={classes.cardContainer}>
       <Grid container spacing={6} className={classes.gridContainer}>
         {(searchValue && searchValue !== "") ?
           getByTitle(searchValue).map((card) => (
             <Grid item key={card.id}>
               <Card className={classes.card}>
                 <CardContent>
                 <CardMedia
                       component="img"
                       height="180"
                       width="180"
                       image={card.image}
                       alt="movie-image"
                   />
                 </CardContent>
                 <CardContent>
                   <Typography className={classes.text} variant="h6" component="div">
                   {card.title}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
           ))
         :
           jsonData.map((card) => (
             <Grid item key={card.id}>
               <Card className={classes.card}>
                 <CardContent>
                   <CardMedia
                       component="img"
                       height="180"
                       width="180"
                       image={card.image}
                       alt="movie-image"
                   />
                 </CardContent>
                 <CardContent>
                   <Typography className={classes.text} variant="h6" component="div">
                     {card.title}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
           ))}
       </Grid>
     </div>
   );
 }


export default MovieCards





