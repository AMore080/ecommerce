import React, { useState, useEffect} from 'react';
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';
// import { loadStripe } from '@stripe/stripe-js';
// require('dotenv').config();

// const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY)


const RentedMovies = () => {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);

  return (
    <>
      {/* Currently rented */}
      <div className='rented'>

        <button className='btn btn-block' onClick={() => setVisible(!visible)}>Rentals</button>
        {visible &&

          <div>
            <Grid.Container gap={3} justify="center">
              <Grid xs={12} sm={4}>
                <Card css={{ w: "100%", h: "400px", border: '$borderWeights$normal solid #96ccd7' }}>
                  <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Text size={15} weight="bold" transform="uppercase" color="#c41212">
                      Expires in [X] days
                    </Text>
                  </Card.Header>
                  <Card.Body css={{ p: 0, background: '#96ccd7ff' }}>
                    <Card.Image
                      src='https://nextui.org/images/card-example-6.jpeg'
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Movie Poster"
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: '#ffffff99',
                      borderTop: '$borderWeights$light solid #96ccd7',
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={20} className='text-center' css={{
                          color: '#287b8b', textGradient: '45deg, #c1ecf4 -20%, #388e8f 50%'
                        }}>
                          Movie Title
                        </Text>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            </Grid.Container>
          </div>
        }
      </div>

      <Spacer y={1} />

      {/* Watchlist */}
      <div className='watchlist'>
        <button className='btn btn-block' onClick={() => setDisplay(!display)}>Watchlist</button>

        {display &&
          <div>
            <Grid.Container gap={3} justify="center">
              <Grid xs={12} sm={4}>
                <Card css={{ w: "100%", h: "400px", border: '$borderWeights$normal solid #96ccd7' }}>
                  <Card.Body css={{ p: 0, background: '#96ccd7ff' }}>
                    <Card.Image
                      src='https://nextui.org/images/card-example-6.jpeg'
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Movie Poster"
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: '#ffffff99',
                      borderTop: '$borderWeights$light solid #96ccd7',
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text size={18} css={{
                          color: '#287b8b', textGradient: '45deg, #c1ecf4 -20%, #388e8f 50%', ml: 10
                        }}>
                          Movie Title
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <form action = "http://localhost:3000/create-checkout-session" method = "POST">
                          <Button flat auto rounded color='gradient' css={{ background: 'linear-gradient(112deg, #8ab1bd -63.59%, #add9c5ff -20.3%, #64afbe 70.46%)', color: ' #388e8f', mr: 10 }}>
                            <Text
                              color='#c1ecf4'
                              size={14}
                              weight='bold'
                              transform='uppercase'
                            >
                              Start Rental
                            </Text>
                          </Button>
                          </form>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
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
