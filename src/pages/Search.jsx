import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error , Loader  ,SongCard } from '../components';
import SearchSongCard from '../components/SearchSongCard';
//import { useGetTopSongsByGenreQuery } from '../redux/services/shazam';
import { useGetSongsBySearchQuery , useGetTracksBySearchQuery } from '../redux/services/shazam';
const Search = () => {
    
    const { searchTerm } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player );
    //const { data , isFetching , error } = useGetSongsBySearchQuery(searchTerm);
    const { data , isFetching , error } = useGetTracksBySearchQuery(searchTerm);

    //const songs = data?.tracks?.hits;
    const songs = data?.tracks?.hits?.map((song) => song.track);
    //console.log(songs);

    if(isFetching) return <Loader title="Searching ...." />
    

    return(
        <div className=''>
            <h2 className='font-semibold text-3xl text-white text-left mt-4  mb-10'>
                Showing result for <span className='font-bold'>{searchTerm}</span>
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {songs?.map((song , i) => (
                   <SearchSongCard
                        key={song.key} 
                        song={song} 
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data.tracks}
                        i={i}
                    />
                ))}
            </div>

        </div>
        )
};

export default Search;


