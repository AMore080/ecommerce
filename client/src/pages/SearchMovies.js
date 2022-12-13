import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { QUERY_NOWPLAYING } from '../utils/queries';

const SearchMovies = () => {
  // const { loading, data } = useQuery(QUERY_NOWPLAYING, {
  //     fetchPolicy: "no-cache"
  //   });

  //   const nowPlayingList = data?.data.results || [];
  //   console.log(nowPlayingList)

  return (
    <>
      <section className='container'>
        {/* popular movies display */}

        {/* search bar */}
        <div className='m-3'>
          <h1 className='text-center'>Search for movies</h1>
          <form>
            <input
              name='searchInput'
              type='text'
              placeholder='Enter Movie Title'
              className="form-control mb-4"
            />
            <select className="custom-select custom-select-lg mb-3">
              <option value>Search by Genre</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="submit" className="btn btn-lg mt-2">SEARCH</button>

          </form>
        </div>
      </section >

      {/* results */}
      < section >
        <h2 className='text-center mt-5'>Movie Results:</h2>
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
                          Add to Cart
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </section >
    </>
  )
};

export default SearchMovies;


// filter by genre --> drop down option OR input option
// input to search movie by title
// Movie data shows [poster, title, description, director]
// button to add to cart and display price

// carousel of popular movies --> hide when search is clicked --> make search bar smaller

// welcome user back --> "Hello, [user] "