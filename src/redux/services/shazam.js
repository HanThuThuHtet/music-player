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
          getSongDetails: builder.query({ query: ({songid}) => `/songs/v2/get-details?.id=${songid}` })
        }),
    });

    export const {
      useGetChartsQuery ,
      useGetSongDetailsQuery
    } = shazamApi ;