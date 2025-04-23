import { useEffect, useState, useContext } from 'react';
import GlobalContext from '../components/GlobalContext';
import MovieService from '../services/movie.service.js'; 
import consumer from 'post-transport/src/consumer';
import Movie from './Movie';

const Home = () => {

    const [message, setMessage] = useState();
    const [movies, setMovies] = useState();

    const config = useContext(GlobalContext);
    let service = undefined;
    
    useEffect(() => { 

      if (config != undefined) {

        service = new MovieService(config);
        let _movies = service.get(setMovies);
      }
    
    }, [config != undefined]);

    return (
        <div className="movie-wrapper">
          {
            movies === undefined || movies.length === 0 ?
              <p>no movies</p> :
              movies.map(it => <Movie movie={it} />)
          }
        </div>
    );    

}

export default Home;