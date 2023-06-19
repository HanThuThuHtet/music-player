import { Link } from "react-router-dom";
import RelatedSongs from "./RelatedSongs";

const DetailsHeader = ({ artistId , artistData , songData  }) => {
  // const artist = artistData?.artists[artistId]?.attributes;
  // const artist = artistData?.id?.attributes;
  //const artworkUrl = songData.data.attributes.artwork.url;
  const artist = artistData?.data[0]?.attributes;
  return(
  <div className=" relative w-full flex flex-col lg:my-0 my-5  lg:mb-3">
    <div className=" absolute inset-0  w-full bg-gradient-to-l from-transparent to-black lg:h-48 h-28 -z-10" ></div>
    <div className="  mt-10 flex  items-center">
      <img 
        src={ artistId ? artist?.artwork?.url.replace('{w}','500').replace('{h}','500')  : songData?.images?.coverart }
        className="lg:w-40 w-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        alt="art" 
      />
      
      <div className="  ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist.name : songData?.title}</p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-gray text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        <p  className="text-gray text-gray-400 mt-2">
          {artistId ? artist?.genreNames[0] : songData?.genres?.primary }
        </p>
        </div>
    </div>
    {/* <div className="w-full sm:h-44 h-24"  /> */}

  </div>
)};

export default DetailsHeader;
