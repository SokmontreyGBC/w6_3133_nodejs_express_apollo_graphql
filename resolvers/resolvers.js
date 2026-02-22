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
  Mutation: {
    addMovie: async (_, { input }) => {
      const newMovie = new MovieModel(input);
      return await newMovie.save();
    },
    updateMovie: async (_, { id, input }) => {
      return await MovieModel.findByIdAndUpdate(id, input, { new: true });
    },
    deleteMovie: async (_, { id }) => {
      return await MovieModel.findByIdAndDelete(id);
    },
  },
};

export default movieResolvers;