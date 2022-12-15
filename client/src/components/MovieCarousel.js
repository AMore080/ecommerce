import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@apollo/client';
import { QUERY_POPULARMOVIES } from "../utils/queries";

const MovieCarousel = () => {
    const { loading, data } = useQuery(QUERY_POPULARMOVIES, {
        fetchPolicy: "no-cache",
        context: { clientName: 'rest' }
    });
    console.log(data);

    const popularList = data?.data.results || [];
    console.log(popularList)


    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Carousel fade className="mb-5">
                    {popularList.map((movie) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block "
                                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                    alt="Popular Movie"
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