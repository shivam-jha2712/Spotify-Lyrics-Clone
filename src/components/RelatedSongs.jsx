import SongBar from './SongBar';
// Being a default implementation we need to remove the curly braces overhere 

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related songs</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artist={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
