import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const MovieCarousel = () => {

    return (
        <>
            <Carousel fade className="mb-5">
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://m.media-amazon.com/images/I/71x1RHSaEhL.jpg"
                        alt="First slide"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://m.media-amazon.com/images/I/71BPuv+iRbL.jpg"
                        alt="Second slide"
                    />

                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://m.media-amazon.com/images/I/81au9XotE0L._AC_UF894,1000_QL80_.jpg"
                        alt="Third slide"
                    />

                  
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default MovieCarousel;