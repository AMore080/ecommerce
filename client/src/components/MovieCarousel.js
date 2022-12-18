import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@apollo/client';
import { Loading } from "@nextui-org/react";
import { QUERY_NOWPLAYING } from "../utils/queries";

const MovieCarousel = () => {
    //Removed no-cache policy here as it makes sense to cache these as
    // this is not constantly changing like the search results
    // This means that the carousel will not have to fetch the data again
    // as it will be cached instead 
    const { loading, data } = useQuery(QUERY_NOWPLAYING);

    const nowPlayingList = data?.movies || [];

    return (
        <>
            {loading ? (
            <Loading
            css={{margin: 'auto'}}
            loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px"}}
          />
            ) : (
                <Carousel fade className="mb-5">
                    {nowPlayingList.map((movie) => {
                        return (
                            <Carousel.Item key={movie.id}>
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