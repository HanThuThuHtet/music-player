import { useParams } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { DetailsHeader , Error , Loader , RelatedSongs } from "../components";
import RelatedArtistsSong from "../components/RelatedArtistsSong";


import { useGetArtistDetailsQuery , useGetArtistTopSongsQuery } from "../redux/services/shazam";

const ArtistDetails = () => {
    
    const { id:artistId } = useParams();
    const { activeSong , isPlaying } = useSelector((state) => state.player);
    const { data:artistData , isFetching:isFetchingArtistDetails} = useGetArtistDetailsQuery(artistId);
    const {data: artistSong, isFetching: isFetchingSongs } = useGetArtistTopSongsQuery(artistId);
    
    //const artist = artistData?.data[0]?.attributes;
    
      
        if (isFetchingArtistDetails) {
            return <Loader title="Loading artist details" />; // Display a loading indicator while fetching the data
        }
    
   
    return(
        <div className="w-full flex flex-col ">
          
             <DetailsHeader
                artistId={artistId}
                artistData={artistData}
            />
           
            {/*<RelatedSongs
                data={artistSong} 
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
             /> */}

          <RelatedArtistsSong
              data={artistSong}
              artistId={artistId}
              artistData={artistData}
              isPlaying={isPlaying}
              activeSong={activeSong}
             /> 

        </div>
    )
};

export default ArtistDetails;

