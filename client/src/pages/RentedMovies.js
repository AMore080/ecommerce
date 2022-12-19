import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import movieImg from '../images/Rental.jpg';
import altPoster from '../images/altPoster.jpg'

// import { loadStripe } from '@stripe/stripe-js';
// require('dotenv').config();

// const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY)


const RentedMovies = () => {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/success`;
    navigate(path);
  }

  const { data } = useQuery(QUERY_ME);
  let userData = data?.me;
  console.log(userData)

  return (
    <>
      {/* Currently rented */}
      <div className='rented'>
        {/* {user ? (
        <> */}
        <button className='btn btn-block' onClick={() => setVisible(!visible)}>Rentals</button>
        {visible &&

          <div>
            <Grid.Container gap={3} justify="center">
              {/* {user.movieOrders.map((order) => ())} this needs to be wrapped around */}
              <Grid xs={12} sm={4}>
                <Card css={{ w: '100%', h: '100%', border: '$borderWeights$normal solid #96ccd7' }}>
                  <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Text size={15} weight="bold" transform="uppercase" color="#c41212">
                      Expires in 30 days
                    </Text>
                  </Card.Header>
                  <Card.Body css={{ p: 0, background: '#96ccd7ff' }}>
                    <Card.Image
                      src={movieImg}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Movie Poster"
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: 'absolute',
                      bgBlur: '#c1ecf455',
                      borderTop: '$borderWeights$light solid #96ccd7',
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text size={20} className='text-center' weight="bold"
                          css={{
                            textGradient: '45deg, #053b4b -20%, #052029 50%'
                          }}>
                          Your Rented Movie
                        </Text>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            </Grid.Container>
          </div>
        }
        {/* </>
      // ) : null} */}
      </div>

      <Spacer y={1} />

      {/* Watchlist */}
      <div className='watchlist'>
        <button className='btn btn-block' onClick={() => setDisplay(!display)}>Watchlist</button>

        {display &&
          <div>
            <Grid.Container gap={3} justify="center">
              <Grid xs={12} sm={4}>
                {userData.savedMovies.map((movie) => {
                  return (
                    <Card css={{ w: '100%', h: '100%', border: '$borderWeights$normal solid #96ccd7' }}>
                    <Card.Body css={{ p: 0, background: '#96ccd7ff' }}>
                    {movie.poster_path ? (
                          <Card.Image
                            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                            width='100%'
                            height='100%'
                            objectFit='cover'
                            alt='Movie Poster'
                          />
                        ) : (<Card.Image
                          src={altPoster}
                          width='100%'
                          height='100%'
                          objectFit='cover'
                          alt='Movie Poster'
                        />)}
                    </Card.Body>
                    <Card.Footer
                      isBlurred
                      css={{
                        position: 'absolute',
                        bgBlur: '#c1ecf455',
                        borderTop: '$borderWeights$light solid #96ccd7',
                        bottom: 0,
                        zIndex: 1,
                      }}
                    >
                      <Col className='col'>
                        <Col className='col-center'>
                          <Text size={18} weight="bold"
                            css={{
                              textGradient: '45deg, #053b4b -20%, #052029 50%'
                            }}>
                            {movie.original_title}
                          </Text>
                        </Col>
                        <Col className='col-center'>
                          <Button onClick={routeChange}
                            className='description' css={{ background: 'linear-gradient(112deg, #053b4b -63.59%, #55adbe -20.3%, #052029 70.46%)' }}>
                            Start Rental
                          </Button>
                        </Col>
                      </Col>
                    </Card.Footer>
                  </Card>
                  )
                })}
              </Grid>
            </Grid.Container>
          </div>
        }
      </div>

    </>
  )
};

export default RentedMovies;



// Rentals section --> started rentals
// display expiration 
// remove automaticlly when expired

// watchlist section 
// purchased movies go here first
// when start rental is selected move to rentals section and add expiration
