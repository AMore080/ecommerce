import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Grid, Card, Col, Row, Button, Text, Modal, useModal, } from '@nextui-org/react';
import MovieCarousel from '../components/MovieCarousel'
import { QUERY_NOWPLAYING } from '../utils/queries';

const SearchMovies = () => {

  const { setVisible, bindings } = useModal();
  const [display, setDisplay] = useState(false);


  return (
    <>
      <Container>
        <div className='m-auto p-5 search text-center'>
          <h1 className='mb-4 greeting'>Welcome to CodeMovie!</h1>

          {/* popular movies display */}
          <MovieCarousel />

          {/* search bar */}
          <form className='search-form'>
            <input
              name='searchInput'
              type='text'
              placeholder='Enter Movie Title'
              className='form-control mb-4'
            />

            <select className='form-control mb-4'>
              <option value>Search by Genre</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>

            <button type='submit' className='search-btn btn btn-lg mt-2 rounded-pill'>SEARCH</button>
          </form>
        </div>

        <button type='submit' className='search-btn btn btn-lg mt-2 rounded-pill' onClick={() => setDisplay(!display)}>SEARCH</button>

        {/* results */}
        {display &&
          <section>
            <h2 className='text-center mt-5'>Movie Results:</h2>
            <Grid.Container gap={3} justify='center'>
              <Grid xs={12} sm={4}>
                <Card css={{ w: '100%', h: '400px', border: '$borderWeights$normal solid #96ccd7' }}>
                  <Card.Body css={{ p: 0, background: '#96ccd7ff' }}>
                    <Card.Image
                      src='https://nextui.org/images/card-example-6.jpeg'
                      width='100%'
                      height='100%'
                      objectFit='cover'
                      alt='Movie Poster'
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: 'absolute',
                      bgBlur: '#ffffff99',
                      borderTop: '$borderWeights$light solid #96ccd7',
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >

                    <Row>
                      <Col>
                        <Text onClick={() => setVisible(true)} size={18} css={{
                          color: '#287b8b', textGradient: '45deg, #c1ecf4 -20%, #388e8f 50%', ml: 10
                        }}>
                          Movie Title
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button flat auto rounded color='gradient' css={{ background: 'linear-gradient(112deg, #8ab1bd -63.59%, #add9c5ff -20.3%, #64afbe 70.46%)', color: ' #388e8f', mr: 10 }}>
                            <Text
                              color='#c1ecf4'
                              size={14}
                              weight='bold'
                              transform='uppercase'
                            >
                              Rent for 30 Days--$15.99
                            </Text>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Footer>

                </Card>
              </Grid>
            </Grid.Container>

            {/* Movie Description */}
            <Modal
              blur
              scroll
              width="50%"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              css={{ background: '#053b4b' }}
              {...bindings}
            >
              <Modal.Header>
                <Text id="modal-title" size={28} color='#c1ecf4'>
                  Description
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Text id="modal-description" size={16} color='#c1ecf4'>
                  Movie Description here
                </Text>
              </Modal.Body>
              <Modal.Footer>
                <Button flat onClick={() => setVisible(false)} css={{ background: 'linear-gradient(112deg, #8ab1bd -63.59%, #add9c5ff -20.3%, #64afbe 70.46%)', color: '#388e8f', }}>
                  <Text size={16} color='#c1ecf4'>
                    Close
                  </Text>
                </Button>
              </Modal.Footer>
            </Modal>
          </section>
        }

      </Container>
    </>
  )
};

export default SearchMovies;


// filter by genre --> drop down option OR input option
// input to search movie by title
// Movie data shows [poster, title, description]
// button to add to cart and display price

// carousel of popular movies --> hide when search is clicked --> make search bar smaller

// welcome user back --> 'Hello, [user] '