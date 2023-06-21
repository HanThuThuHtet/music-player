import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error , Loader , SongCard } from '../components';
//import { useGetTopSongsByGenreQuery } from '../redux/services/shazam';
import { useGetChartsQuery } from '../redux/services/shazam';
const TopCharts = () => {
    
    const { activeSong , isPlaying } = useSelector((state) => state.player );
    //const { data , isFetching  } = useGetTopSongsByGenreQuery();
    const { data , isFetching , error } = useGetChartsQuery();

    //console.log(country);

    if(isFetching) return <Loader title="Loading top charts " />
    

    return(
        <div className=''>
            <h2 className='font-bold text-3xl text-white text-left mt-4  mb-10'>
                Discover Top Charts
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-4'>
                {(data.tracks)?.map((song , i) => (
                   <SongCard 
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

export default TopCharts;

