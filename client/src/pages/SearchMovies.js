import React, { useState } from 'react';
import { Container, Grid, Card, Col, Row, Button, Text, Modal, useModal, } from '@nextui-org/react';
import MovieCarousel from '../components/MovieCarousel'
import { ADD_TO_CART } from '../utils/actions';
import { useStoreContext } from '../utils/GlobalState';
import { Link } from 'react-router-dom';

const SearchMovies = () => {

  const { setVisible, bindings } = useModal();
  const [display, setDisplay] = useState(false);

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

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}`
      );
      console.log(response)
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { items } = await response.json();
      console.log(items)

      const movieList = items.map((movie) => ({
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        overview: movie.overview,
      }));
      setSearchedMovies(movieList);
      setSearchInput('');
    } catch (err) {
      console.error(err);
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
              name='searchInput'
              value={searchInput}
              type='text'
              placeholder='Enter Movie Title'
              className='form-control mb-4'
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <select className='form-control mb-4'>
              <option value>Search by Genre</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>

            <button onClick={() => setDisplay(!display)} type='submit' className='search-btn btn btn-lg mt-2 rounded-pill'>SEARCH</button>
          </form>
        </div>

        {display &&
          <h2 className='text-center mt-5'>Movie movieList:</h2>
        }

        {/* movieList */}
        {searchedMovies.map((movie) => {
          return (
            <section>
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
                            {movie.title}
                          </Text>
                        </Col>
                        <Col>
                          <Row justify="flex-end">
                            <Button auto rounded color='gradient' css={{ background: 'linear-gradient(112deg, #8ab1bd -63.59%, #add9c5ff -20.3%, #64afbe 70.46%)', color: ' #388e8f', mr: 10 }} >
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

              {/* Movie Description  */}
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
            </section>
          )
        })}

      </Container>
    </>
  )
// }
};

export default SearchMovies;


// filter by genre --> drop down option OR input option
// input to search movie by title
// Movie data shows [poster, title, description]
// button to add to cart and display price

// carousel of popular movies --> hide when search is clicked --> make search bar smaller

// welcome user back --> 'Hello, [user]