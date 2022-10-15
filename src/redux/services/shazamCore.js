import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// For using Redux components within the project we imported these things 

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'de786d1714msh6e01f1c27e8f064p1f6abbjsn8672dcf38917',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Started Creating an API call
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
});

    // The procees of getting a hold of this api thing is via the help of all the things we have learnt so far using Shazam API of the Rapid API things we use include:
    // Request: https:// (url)
    //Headers name and values