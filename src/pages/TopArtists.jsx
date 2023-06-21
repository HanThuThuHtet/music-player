import React from 'react';
import { ArtistCard , Error , Loader } from '../components';
import { useSelector } from 'react-redux';
import { useGetChartsQuery } from '../redux/services/shazam';

const TopArtists = () => {
    
    const { activeSong , isPlaying } = useSelector((state) => state.player );
    //const { data , isFetching  } = useGetTopSongsByGenreQuery();
    const { data , isFetching , error } = useGetChartsQuery();

    //console.log(country);

    if(isFetching) return <Loader title="Loading top charts " />
    

    return(
        <div className=''>
            <h2 className='font-bold text-3xl text-white text-left mt-4  mb-10'>
                Top Artists
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {(data.tracks)?.map((track) => (
                   <ArtistCard
                        key={track.key}
                        track={track}
                   />
                ))}
            </div>

        </div>
        )
};

export default TopArtists;


