import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth'
import { getSavedMovieIds, saveMovieIds } from '../utils/localstorage';
import { Container, Grid, Card, Col, Button, Text, Popover } from '@nextui-org/react';
import { Loading } from "@nextui-org/react";
import MovieCarousel from '../components/MovieCarousel'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { QUERY_SEARCHMOVIE, QUERY_DISCOVER } from "../utils/queries";
import { SAVE_MOVIE } from '../utils/mutations'
import altPoster from '../images/altPoster.jpg'
import { GiArchiveResearch } from "react-icons/gi";
// import { ADD_TO_CART } from '../utils/actions';
// import { useStoreContext } from '../utils/GlobalState';
// import { Link } from 'react-router-dom';

const SearchMovies = () => {

  const [search, setsearch] = useState('');
  const [savedMovieIds, setSavedMoviesIds] = useState(getSavedMovieIds());
  const [saveMovie] = useMutation(SAVE_MOVIE);

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds)
  })

  const discoverMovies = useQuery(QUERY_DISCOVER);

  const [searchResults, { loading, data }] = useLazyQuery(QUERY_SEARCHMOVIE, {
    fetchPolicy: "no-cache"
  });

  const searchList = data?.searchMovie || [];

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

  const handleSaveMovie = async (id) => {
    console.log(searchList)
    const movieToSave = searchList.find((movie) => movie.id === id);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if(!token){
      return false;
    }

    try {
      await saveMovie({
        variables: { movieData: {...movieToSave} },
      });

      setSavedMoviesIds([...savedMovieIds], movieToSave.id)
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
          <Grid.Container>
          <Grid lg={7} xs={8}  justify="center">
            <form className='search-form' onSubmit={handleFormSubmit}>
              <input
                name='search'
                value={search}
                type='text'
                placeholder='Enter Movie Title'
                className='form-control mb-4'
                onChange={(e) => setsearch(e.target.value)}
              />
                <button type='submit' className='search-btn btn btn-lg mt-2 rounded-pill' auto><GiArchiveResearch />SEARCH</button>
          </form>
          </Grid>
            <Grid lg={4} xs={8}  justify="center">
              <button type='submit' className='discover-btn btn btn-lg mt-2 rounded-pill' auto>
                <Text 
                  size={30} b color='verditerBlue'>
                    No idea?
                </Text>
              </button>
            </Grid>
          </Grid.Container>
        </div>

        <section>

          {/* movieList */}
          {loading ? (
                  <Loading
                  css={{margin: 'auto'}}
                  loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px"}}
                />
          ) : (
            <Grid.Container gap={3} justify='center'>

              {searchList.map((movie) => {
                return (
                  <Grid xs={12} sm={4}>
                    <Card key={movie.id} css={{ w: '100%', h: '100%', border: '$borderWeights$normal solid #96ccd7' }}>
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
                            <Popover disableShadow>
                              <Popover.Trigger>
                                <Button className='description' css={{ background: 'linear-gradient(112deg, #053b4b -63.59%, #052029 -20.3%, #55adbe 70.46%)' }}>Movie Summary</Button>
                              </Popover.Trigger>
                              <Popover.Content className='content'>
                                {movie.overview ? (
                                  <Text css={{ p: "$10" }}>{movie.overview}</Text>
                                ) : <Text css={{ p: "$10" }}>No summary available for this movie</Text>}
                              </Popover.Content>
                            </Popover>
                          </Col>
                          <Col className='col-center'>
                            <Button className='description' css={{ background: 'linear-gradient(112deg, #053b4b -63.59%, #55adbe -20.3%, #052029 70.46%)' }}>
                              {/* onClick={addToCart} */}
                              Rent for 30 Days--$15.99
                            </Button>
                          </Col>
                          <Col className='col-center'>
                            {Auth.loggedIn() && (
                              <Button
                                css={{ background: 'linear-gradient(112deg, #053b4b -63.59%, #55adbe -20.3%, #052029 70.46%)' }}
                                disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movie.id)}
                                className='btn-block btn-info description'
                                onClick={() => handleSaveMovie(movie.id)}>
                                {savedMovieIds?.some((savedMovieId) => savedMovieId === movie.id)
                                  ? 'This movie has already been saved!'
                                  : 'Add to watchlist!'}
                              </Button>
                              )}
                            </Col>
                        </Col>
                      </Card.Footer>
                    </Card>
                  </Grid>
                )
              })}
            </Grid.Container>
          )}

        </section>


      </Container>
    </>
  )
  // }
};

export default SearchMovies;
