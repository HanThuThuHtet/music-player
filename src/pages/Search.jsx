import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error , Loader , SearchSongCard } from '../components';
//import { useGetTopSongsByGenreQuery } from '../redux/services/shazam';
import { useGetSongsBySearchQuery } from '../redux/services/shazam';
const Search = () => {
    
    const { searchTerm } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player );
    const { data , isFetching , error } = useGetSongsBySearchQuery(searchTerm);

    const songs = data?.tracks?.hits;

    //console.log(country);

    if(isFetching) return <Loader title="Loading top charts " />
    

    return(
        <div className=''>
            <h2 className='font-bold text-3xl text-white text-left mt-4  mb-10'>
                Showing result for <span className='font-black'>{searchTerm}</span>
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-4'>
                {songs?.map((song , i) => (
                   <SearchSongCard 
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                   />
                ))}
            </div>

        </div>
        )
};

export default Search;


