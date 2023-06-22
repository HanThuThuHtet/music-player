import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '8f19418405msh7187b3a3591a2ebp1c6ee4jsnd024aaf143ec',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
  // fetch('https://shazam.p.rapidapi.com/charts/track', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

    export const shazamApi = createApi({
        reducerPath: 'shazamApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam.p.rapidapi.com',
          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key' ,'8f19418405msh7187b3a3591a2ebp1c6ee4jsnd024aaf143ec' );
            return headers;
          },
        }),
        endpoints: (builder) => ({
          getCharts: builder.query({ query: () =>  '/charts/track'}), 
          getSongDetails:builder.query({ query: ({songId}) => `songs/v2/get-details?id=${songId}` }),
          getTracksBySearch: builder.query({query: (Searchterm) => `/search?term=${Searchterm}`})
        }),
    });


    export const shazamSongApi= createApi({
      reducerPath: 'shazamSongApi',
      baseQuery: fetchBaseQuery({
          baseUrl: "https://shazam-core7.p.rapidapi.com",
          prepareHeaders: (headers) => {
              headers.set('X-RapidAPI-Key', '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c')
  
              return headers
          },
      }),
      endpoints: (builder) => ({
          getSongDetails: builder.query({query: ({ songid }) => `/songs/get_details?id=${songid}`}),
          // getSongRelated: builder.query({query: ({ songid }) => `/songs/get-related-artist?id=${songid}`})
          getSongRelated: builder.query({query : ({songid}) => `/songs/list-recommendations?id=${songid}`}),
          getArtistDetails: builder.query({query : (artistId) => `/artist/get-details?id=${artistId}`}),
          getArtistTopSongs: builder.query({query :(artistId) =>  `/artist/get-top-songs?id=${artistId}`}),
          getTopSongsByCountry: builder.query({query : (countrycode) => `/charts/get-top-songs-in-country?country_code=${countrycode}`}),
          getTopSongsByGenre: builder.query({query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}` }),
          getSongsBySearch: builder.query({query: (Searchterm) => `/search?term=${Searchterm}`})
  
      })
  })

  export const { useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetArtistTopSongsQuery, 
    useGetTopSongsByCountryQuery, useGetTopSongsByGenreQuery, useGetSongsBySearchQuery
  } = shazamSongApi
    
    export const {
      useGetChartsQuery ,
      useGetTracksBySearchQuery
      
    } = shazamApi ;

    