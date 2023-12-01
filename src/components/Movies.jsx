import movies from "../models/movies"

export default function Movies() {
  return (
    <div className='movies'>
      <div className='movies-header'>
        <h2 className='movies-h'>Movies at AMC</h2>
        <div className='separator2'></div>
        <div className='options'>
          <p className='p-header ph3'>Now Playing</p>
          <p className='p-header ph3'>Coming Soon</p>
          <p className='p-header ph3'>On Demand</p>
        </div>
      </div>
      <div className='movies-list'>
        {/* TODO: Use map to render each movie from movies.js */}
        {movies.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <div className="movie-image" style={{backgroundImage: `url('${movie.image}')`}}></div>
              <div className="movie-description">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="duration">{movie.duration}</p>
              </div>
              <div className="movie-button">Get Tickets</div>
            </div>
          )
        })}
      </div>
      <div className="qr">
        <img className="qr-img" src={require('../qr.png')} alt="" />
      </div>
    </div>
  )
}
