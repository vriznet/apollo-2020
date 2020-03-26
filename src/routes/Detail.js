import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  let { id } = useParams();
  id = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  if (loading) {
    return 'loading';
  }
  if (!loading && data && data.movie) {
    return data.movie.title;
  }
  return 'Detail';
};
