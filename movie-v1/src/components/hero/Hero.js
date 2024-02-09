import Carousel from 'react-material-ui-carousel';
import './Hero.css';
import { Paper } from '@mui/material';


const Hero = ({ movies }) => {
    return (
        <div className='movie-carousel-card-container'>
            {/* <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className='movie-card-container'>
                                    <div className='movie-card'>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt='' />
                                            </div>
                                            <div className='movie-title'>
                                                <h4> {movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel> */}
             <Carousel>
        {
            movies.map((movie) =>{
                return(
                    <Paper>
                        <div className = 'movie-card-container'>
                            <div className="movie-card">
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                       

                                        <div className="movie-review-button-container">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
        </div>
    )
}

export default Hero