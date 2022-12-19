import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth'
import { getSavedMovieIds, saveMovieIds } from '../utils/localstorage';
import { Grid, Card, Col, Button, Text, Popover } from '@nextui-org/react';
import { Loading } from "@nextui-org/react";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_DISCOVER } from "../utils/queries";
import altPoster from '../images/altPoster.jpg'
import { SAVE_MOVIE } from '../utils/mutations'

const DiscoverResults = () => {
  const [savedMovieIds, setSavedMoviesIds] = useState(getSavedMovieIds());
  const [saveMovie] = useMutation(SAVE_MOVIE);

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds)
  })

  const { loading, data } = useQuery(QUERY_DISCOVER);
  const discoveryList = data?.movieDiscovery || [];

  const handleSaveMovie = async (id) => {
    console.log(discoveryList)
    const movieToSave = discoveryList.find((movie) => movie.id === id);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveMovie({
        variables: { movieData: { ...movieToSave } },
      });

      setSavedMoviesIds([...savedMovieIds], movieToSave.id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>

      {/* movieList */}
      {loading ? (
        <Loading
          css={{ margin: 'auto' }}
          loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
        />
      ) : (
        <Grid.Container gap={3} justify='center'>

          {discoveryList.map((movie) => {
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

    </>
  )
}

export default DiscoverResults;