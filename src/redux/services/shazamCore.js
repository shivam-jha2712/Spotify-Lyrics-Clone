import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// For using Redux components within the project we imported these things 


// Started Creating an API call
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'de786d1714msh6e01f1c27e8f064p1f6abbjsn8672dcf38917');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

// Note that Redux allows us to call this query of getTopCharts as a hook
export const {
    useGetTopChartsQuery,
} = shazamCoreApi;

    // The procees of getting a hold of this api thing is via the help of all the things we have learnt so far using Shazam API of the Rapid API things we use include:
    // Request: https:// (url)
    //Headers name and values

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const shazamCoreApi = createApi({
//     reducerPath: 'shazamCoreApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
//         prepareHeaders: (headers) => {
//             headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

//             return headers;
//         },
//     }),
//     endpoints: (builder) => ({
//         getTopCharts: builder.query({ query: () => '/charts/world' }),
//         getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
//         getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
//         getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
//         getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
//         getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
//         getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
//     }),
// });

// export const {
//     useGetTopChartsQuery,
//     useGetSongsByGenreQuery,
//     useGetSongsByCountryQuery,
//     useGetSongsBySearchQuery,
//     useGetArtistDetailsQuery,
//     useGetSongDetailsQuery,
//     useGetSongRelatedQuery,
// } = shazamCoreApi;