import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movieCardContainer col-12 col-sm-6 col-lg-2 mb-3 d-flex flex-column">
      <img className="movieCardImage" alt={title} src={posterPath} />
      <div className="d-flex flex-column align-items-center mt-2">
        <h1 className="movieTitle m-0">{title}</h1>
        <p className="movieRating mb-0 ms-1">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="mt-auto align-self-center">
        <button className="btn btnOutlineSuccess" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
