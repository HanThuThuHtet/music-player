import React from 'react'
import SongBar from './SongBar'

const RelatedArtistsSong = ({data, artistId , artistData, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => {


  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-3xl text-white mt-3"> Top - Songs: </h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.data?.map((song, i) => (
          <SongBar key={`${song.id}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          
          />
        ))}
      </div>
    </div>
   

  )
}

export default RelatedArtistsSong