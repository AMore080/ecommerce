import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@apollo/client';
import { QUERY_NOWPLAYING } from "../utils/queries";

const MovieCarousel = () => {
    const { loading, data } = useQuery(QUERY_NOWPLAYING, {
        fetchPolicy: "no-cache",
        context: { clientName: '@rest' }
    });

    const nowPlayingList = data?.data.results || [];

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Carousel fade className="mb-5">
                    {nowPlayingList.map((movie, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block "
                                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                    alt="Now Playing"
                                />
                                <Carousel.Caption>
                                    <h2>{movie.title}</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            )}
        </>
    )
}

export default MovieCarousel;