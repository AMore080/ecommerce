import React, { useState } from 'react';
import { Container, Grid, Card, Col, Row, Button, Text, Modal, useModal, } from '@nextui-org/react';
import MovieCarousel from '../components/MovieCarousel'
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_NOWPLAYING, QUERY_SEARCHMOVIE } from "../utils/queries";
// import { ADD_TO_CART } from '../utils/actions';
// import { useStoreContext } from '../utils/GlobalState';
// import { Link } from 'react-router-dom';

const SearchMovies = () => {

  const { setVisible, bindings } = useModal();
  const [search, setsearch] = useState('');

  const [searchResults, { loading, data }] = useLazyQuery(QUERY_SEARCHMOVIE, {
    fetchPolicy: "no-cache"
  });

  const searchList = data?.searchMovie || [];

  // const [searchedMovies, setSearchedMovies] = useState([]);
  // const MovieItem = (item) => {
  //   const [state, dispatch] = useStoreContext;

  //   const {
  //     _id,
  //     original_title,
  //     poster_path
  //   } = item;

  //   const { cart } = state

  //   const addToCart = () => {
  //     const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  //     if (itemInCart) {
  //       dispatch({
  //         type: ADD_TO_CART,
  //         movies: {...item}
  //       });
  //     }
  //   }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await searchResults({ variables: { search } });
      console.log(data)
    } catch (err) {
      console.log(err)
    }

  };

  return (
    <>
      <Container>
        <div className='m-auto p-5 search text-center'>
          <h1 className='mb-4 greeting'>Welcome to CodeMovie!</h1>

          {/* popular movies display */}
          <MovieCarousel />

          {/* search bar */}
          <form className='search-form' onSubmit={handleFormSubmit}>
            <input
              name='search'
              value={search}
              type='text'
              placeholder='Enter Movie Title'
              className='form-control mb-4'
              onChange={(e) => setsearch(e.target.value)}
            />

            <button type='submit' className='search-btn btn btn-lg mt-2 rounded-pill'>SEARCH</button>
          </form>
        </div>


        {/* movieList */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <section>
            {searchList.map((movie) => {
              return (
                <div>
                  <Grid.Container gap={3} justify='center'>
                    <Grid xs={12} sm={4}>
                      <Card key={movie.id} css={{ w: '100%', h: '400px', border: '$borderWeights$normal solid #96ccd7' }}>
                        <Card.Body css={{ p: 0, background: '#96ccd7ff' }}>
                          <Card.Image
                            src={movie.poster_path}
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
                                {movie.original_title}
                              </Text>
                            </Col>
                            <Col>
                              <Row justify="flex-end">
                                <Button auto rounded color='gradient' css={{ background: 'linear-gradient(112deg, #8ab1bd -63.59%, #add9c5ff -20.3%, #64afbe 70.46%)', color: ' #388e8f', mr: 10 }}>
                                  {/* onClick={addToCart} */}

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
                        {movie.overview}
                      </Text>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setVisible(false)} css={{ background: 'linear-gradient(112deg, #8ab1bd -63.59%, #add9c5ff -20.3%, #64afbe 70.46%)', color: '#388e8f', }}>
                        <Text size={16} color='#c1ecf4'>
                          Close
                        </Text>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )
            })}
          </section>
        )}
      </Container>
    </>
  )
  // }
};

export default SearchMovies;
