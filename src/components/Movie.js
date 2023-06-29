import { Link  } from "react-router-dom"
import ProTypes from "prop-types"

function Movie({id, coverImage, title, summary, genres}) {
    return (
    <div>
     <img src={coverImage} alt={title}/>
     <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
     <p>{summary}</p>
     <ul>
      {genres.map((g)=>(
       <li key={g}>{g}</li>
      ))}
     </ul>
  </div>
  )
}

Movie.ProTypes = {
    id: ProTypes.number.isRequired,
    coverImage: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired
}

export default Movie