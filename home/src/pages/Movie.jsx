const Movie = ({movie}) => {

    return (

        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
            <div>
                {movie.original_title}
            </div>
        </div>
    );
}

export default Movie;