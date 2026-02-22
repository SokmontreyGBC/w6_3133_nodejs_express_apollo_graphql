import MovieModel from '../models/Movie.js';

// Resolvers define the technique for fetching the types defined in the schema.
const movieResolvers = {
  Query: {
    movies: async () => {
      return await MovieModel.find();
    },
    movie: async (_, { id }) => {
      return await MovieModel.findById(id);
    },
    moviesByDirector: async (_, { director_name }) => {
      return await MovieModel.findByDirector(director_name);
    },
  },
  Mutation: {},
};

export default movieResolvers;