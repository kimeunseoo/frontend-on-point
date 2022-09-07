import React from "react";
import Geolocation from "react-geolocation";

function GeoMyLocation() {
  // const [latitude, setLatitude] = useState('')
  // const [longitude, setLongitude] = useState('')

  //   const UseCurrentLocation = () => {
  //   useEffect(()=>{
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //         setLatitude(position.coords.latitude)
  //         setLongitude(position.coords.longitude)
  //     })
  // },[UseCurrentLocation])

  //   }
 
  return (
    <div>
      <Geolocation
        render={({ getCurrentPosition, fetchingPosition, position }) => (
          <div>
            <button onClick={getCurrentPosition}>Get Current Position</button>
            {/* <p>Fetching Position: {fetchingPosition ? "YES" : "NO"}</p> */}
            <p>{position && position.coords.latitude}</p>
            <p>{position && position.coords.longitude}</p>
          </div>
        )}
      />
    </div>
  );
}

export default GeoMyLocation;
