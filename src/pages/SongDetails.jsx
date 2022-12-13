import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
// This useParams is going to fetch us the id of the songdetails we want.

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    console.log(songid);
    // Why did we choose songid and not anything else the reason is that in this case we have chosen that songid is the specific pointing factor. 
    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData}/> */}
            <div className='mb-10'>
                <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>
            </div>
        </div>
    )
};

export default SongDetails;
