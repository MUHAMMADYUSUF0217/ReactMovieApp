import Movie from "./Movie";


export default function Movies(props) {
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? movies.map(movie => (
               <Movie key={movie.imdbID} {...movie} />
            )) : <h1>Oops nothing found</h1> }
        </div>
      )
}