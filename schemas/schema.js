import { gql } from 'graphql-tag';

const movieSchema = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  input AddMovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  input UpdateMovieInput {
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
    moviesByDirector(director_name: String!): [Movie!]!
  }

  type Mutation {
    addMovie(input: AddMovieInput!): Movie!
    updateMovie(id: ID!, input: UpdateMovieInput!): Movie
    deleteMovie(id: ID!): Movie
  }
`;

export default movieSchema;