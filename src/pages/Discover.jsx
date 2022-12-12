// Using Special Properties and  functions from React Redux Tool kit as for importing the Dispatch values of all the songs listed under.
import { useDispatch, useSelector } from 'react-redux';


import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

// Now how does redux works it is like a huge round Cake and the cake can have slices like it ca have a Slice for Music Player Functionality and a Slice for Shazam Core Functionality and in that even which category whetehr needs to be selected is determined by the useSelector  function.

const Discover = () => {
    const dispatch = useDispatch();


    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
    // This is going to spit out three different things 
    const genreTitle = 'Pop';

    if (isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />;

    {/* tailwindcss is very useful as it helped us to set the CSS in one line only by sm:flex row means on small devices it would flex-row else it would be column */ }

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm-mt-0 mt-5"
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
                {/* We created that Discover wala text and genere wala drop down and uske likhne se leke sajawat tak ya tak ki woh kaunsa genre ko chunega so dekha hai aur aisa isliye kiya hai taki saari category map ho jaye aur jo uske corresponding value hai woh onChange ke aane pr applicable bhi ho aur saath hi saath provided data ke saath populate ho jaye jab drop down se genre title ko select kiya jaye tab it should change . */}
            </div>

            <div
                className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                    // This is having being fetched from the features list and is having all the data in it of is playing and all. And all the properties passed in here would be used from the SongCard Compnent of it.
                ))}
            </div>
        </div>
    )
}


export default Discover;
