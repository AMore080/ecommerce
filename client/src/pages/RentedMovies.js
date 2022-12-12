import React, { useState } from 'react';
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';

const RentedMovies = () => {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);


  return (
    <>
      {/* Currently rented */}
      <div>

        <button className='btn btn-secondary btn-lg btn-block' onClick={() => setVisible(!visible)}>Rentals</button>
        {visible &&

          <div>
            <Grid.Container gap={3} justify="center">
              <Grid xs={12} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                  <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Text size={15} weight="bold" transform="uppercase" color="#ffffffAA">
                      Expires in [X] days
                    </Text>
                  </Card.Header>
                  <Card.Image
                    src='https://nextui.org/images/card-example-6.jpeg'
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Movie Poster"
                  />
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={18} className='text-center'>
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

      <Spacer y={3} />

      {/* Watchlist */}
      <div>
        <button className='btn btn-secondary btn-lg btn-block' onClick={() => setDisplay(!display)}>Watchlist</button>

        {display &&
          <div>
            <Grid.Container gap={3} justify="center">
              <Grid xs={12} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                  <Card.Body css={{ p: 0 }}>
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
                      bgBlur: "#ffffff66",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={18}>
                          Movie Title
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button flat auto rounded color="secondary">
                            <Text
                              css={{ color: "inherit" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              Start Rental
                            </Text>
                          </Button>
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


// Cards to hold movies

// Rentals section --> started rntals
// display expiration 
// remove automaticlly when expired

// watchlist section 
// purchased movies go here first
// when start rental is selected move to rentals section and add expiration
