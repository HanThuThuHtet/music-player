import { useDispatch , useSelector  } from "react-redux";
import { useEffect } from "react";
import { Error, Loader , SongCard } from "../components";
import { genres } from '../assets/constants'
import { useGetChartsQuery , useGetTopSongsByGenreQuery  } from '../redux/services/shazam'
import { selectGenreListId } from "../redux/features/playerSlice";



const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong , isPlaying , genreListId } = useSelector((state) => state.player);
    
   
    const { Alldata , isAllFetching , allError } = useGetChartsQuery();
    
    //console.log(allGenres);
      
    
    const { data , isFetching , error } = useGetTopSongsByGenreQuery(genreListId || 'POP');
    
    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

    if(isFetching) return <Loader title="Loading song ..." /> ;
    if(error) return <Error /> ;

    return(
        <div className="flex flex-col ">

            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4  mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Dicover {genreTitle}</h2>
                <select name="" id="" onChange={(e) => {dispatch(selectGenreListId(e.target.value))}}
                        value={genreListId || 'all'}
                        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                    <option value="all">All</option>
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option> )}
                    {/* <option value="">All</option> */}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-4">
                
                {data?.tracks?.map((song,i) => (
                    <SongCard 
                        key={song.key} 
                        song={song} 
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data.tracks}
                        i={i}/>
                ))}
            </div>

        </div>
    );
};
export default Discover;
