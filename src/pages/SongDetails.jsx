import { useParams } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { DetailsHeader , Error , Loader , RelatedSongs } from "../components";

import { setActiveSong , playPause } from "../redux/features/playerSlice";
import { useGetChartsQuery, useGetSongDetailsQuery , useGetSongRelatedQuery} from "../redux/services/shazam";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player);
    const { data:songData , isFetching:isFetchingSongDetails} = useGetSongDetailsQuery({songid});
    // const {data} = useGetChartsQuery();
    const { data , isFetching:isFetchingRelatedSongs } = useGetSongRelatedQuery({songid});
    
    const handlePauseClick =() => {
        dispatch(playPause(false))
    
      }
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true))
    }
      
        if (isFetchingSongDetails || isFetchingRelatedSongs) {
            return <Loader title="Searching song details" />; // Display a loading indicator while fetching the data
        }
    //   if (error){
    //         return <Error />; // Display an error message if songData or its properties are undefined or empty
    //   }
    // console.log(songData.data.attributes);
    // const song = songData.data[0];
    // console.log(song);
   
    return(
        <div className="w-full flex flex-col ">
            <DetailsHeader
                artistId={""}
                songData={songData}
            />
            
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songData?.data?.attributes[0] === 'LYRICS' ? songData?.sections[0].text.map((lyric,i) => (
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>}
                </div>
            </div>
            <RelatedSongs
                data={data} 
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
             />
        </div>
    )
};

export default SongDetails;
