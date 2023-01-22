import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// For using Redux components within the project we imported these things 


// Started Creating an API call
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            // headers.set('X-RapidAPI-Key', '1c00e11c7amsh2b0dd71641a71a3p1dde1fjsn0a37fa62479e');
            // headers.set('X-RapidAPI-Key', 'de786d1714msh6e01f1c27e8f064p1f6abbjsn8672dcf38917');
            headers.set('X-RapidAPI-Key', 'beb2a6e2abmshdf3c3c00de1b480p108daejsn3dee9bc9e14d');

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/v1/charts/world' }),
        getSongsByGenre: builder.query({ query: (genre) => `/v1/charts/genre-world?genre_code=${genre}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/v1/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `/v1/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/v1/tracks/related?track_id=${songid}` }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;

//     endpoints: (builder) => ({
//         getTopCharts: builder.query({ query: () => '/charts/world' }),
//         getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
//         getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
//         getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
//     }),
// });

// // Note that Redux allows us to call this query of getTopCharts as a hook
// export const {
//     useGetTopChartsQuery,
//     useGetSongDetailsQuery,
//     useGetSongRelatedQuery,
//     useGetArtistDetailsQuery,
// } = shazamCoreApi;

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
//     