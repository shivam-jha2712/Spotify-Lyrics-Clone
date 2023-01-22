import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

// Importing the CSS components available in the swiper package
import 'swiper/css';
import 'swiper/css/free-mode';

// Here we would be fetching the topChartCard containing the top 5 of the Top Chart songs into the chart.
const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="fot-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg" />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song[0]?.artists[0].adamid}`}>
          <p className="text-base font-bold text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  // This useeffect is added to not to let the page scroll down to the bottom page in the mobile devices.

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  // Here there existed a dependency array [] after tge behviour and the page would reset to its initial state i.e; to the top section on lodaing after the removal of the dependency array.

  // This means it fetches only the top 5 data items where data items are the top 50 songs from the world artist charts.
  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // This return is to access all the working compontent use cases here and this is how it helps.

  return (
    <div ref={divRef} className="xl:ml-6 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Charts</h2>
          <Link to="/top-charts">
            <p className='text-gray-300 text-base cursor-pointer'>See More</p>
          </Link>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
            // The yop chart card has a different look which is elaborated in the inline css of this TopPlays component itself

            //This is to fetch the details the top card and the details corresponding to it. It is fetched just before TopPlay and it is having the details of the topChart
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Artist</h2>
          <Link to="/top-artists">
            <p className='text-gray-300 text-base cursor-pointer'>See More</p>
          </Link>
        </div>
        {/* The Swiper component is responsible for getting the swipe menu in the artist section what it is doin is managing all the slides per view and how it would be animated what the look and feel should be and many more   */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full 
              animate-slideright"
            >
              <Link to={`/artists/${song[0]?.artists[0].adamid}`}>
                <img src={song?.images.background} alt="name"
                  className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};

export default TopPlay;
