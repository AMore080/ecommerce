import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@apollo/client';
import { QUERY_NOWPLAYING } from '../utils/queries';



const MovieCarousel = () => {
    const { loading, data } = useQuery(QUERY_NOWPLAYING, {
        fetchPolicy: "no-cache"
      });
      console.log(data);
    
      const nowPlayingList = data?.movies || [];
      console.log(nowPlayingList)

    return (
        <>
            <Carousel fade className="mb-5">
             {nowPlayingList.map((movie) => {
                return (
                    <Carousel.Item key={movie.id}>
                    <img
                        className="d-block"
                        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                )
             })}
            </Carousel>

        </>
    )
}

export default MovieCarousel;