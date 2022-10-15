import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';


const Discover = () => {
    console.log(genres);

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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
}


export default Discover;
