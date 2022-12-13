import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_NOWPLAYING } from '../utils/queries';
import { Grid } from "@nextui-org/react";
import { Card, Col, Text } from "@nextui-org/react";


const Home = () => {
  const { loading, data } = useQuery(QUERY_NOWPLAYING, {
    fetchPolicy: "no-cache"
  });
  console.log(data);

  const nowPlayingList = data?.movies|| [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>CodeMovie!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Now Playing:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            <Grid.Container  gap={2} justify="center">
            {nowPlayingList.map((movie) => {
              return (
                <Grid>
                    <Card key={movie.title}>
                    <Card.Header css={{position: 'absolute',zIndex: 1, top: 5}}>
                        <Col>
                        <Text h4 color='White'>
                            {movie.title}
                        </Text>
                        </Col>
                    </Card.Header>
                    <Card.Image
                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                    objectFit='cover'
                    width="100%"
                    height={200}
                    alt="Card Image Background"
                    />
                    </Card>
                </Grid>
              );
            })}
            </Grid.Container>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
