import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
// This useParams is going to fetch us the id of the songdetails we want.

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    // This is is now resposnible for getting the related songs of the current artist 
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    // This id for isPlay and isPause component Function 
    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    };

    console.log(songid);

    if (isFetchingSongDetails || isFetchingRelatedSongs) return
    <Loader title="Searching Song Details" />;

    if (error) return <Error />;


    // Why did we choose songid and not anything else the reason is that in this case we have chosen that songid is the specific pointing factor. 
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />
            <div className='mb-10'>
                <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>
                <div className='mt-5'>
                    {/* Checking if there are lyrics for this song */}
                    {songData?.sections[1].type === 'LYRICS'
                        /*If there are lyrics available for this song then
                         get the lines corresponding to this song index. */
                        ? songData?.sections[1].text.map((line, i) => (
                            <p className="text-gray-400 text-base my-1">{line}
                            </p>
                            /*And if there exists no lyrics then print the given 
                            message*/
                        )) : <p className="text-gray-400 text-base my-1">
                            Sorry, No Lyrics Found </p>}
                </div>
            </div>
            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    )
};

export default SongDetails;
// The lyics of the song needs to be added with the help of the api fetching segment as it is from the song section so what we need to do is. We need to make another endpoint for the song lyrics to b efetched in the services/shazamCore.js File
