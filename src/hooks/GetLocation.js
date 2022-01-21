import { useState, useEffect } from "react";

const GetLocation = () => {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, [lat, lon]);

  //console.log(lat,lon)
  return { lat, lon };
};

export default GetLocation;
