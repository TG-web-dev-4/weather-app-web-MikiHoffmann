import { FlexContainer } from "../components/styledElements/Containers.styled";
import WeatherCard from "../components/appComponents/WeatherCard";

import GetLocation from '../hooks/GetLocation'

export default function WeatherOverview() {

  const myLocation =  GetLocation()
  console.log('LATITUDE = ',myLocation.lat)
  //console.log('LONGITUDE = ',myLocation.lon)

  
  return (
    <>
      <FlexContainer>
        <WeatherCard />
      </FlexContainer>
    </>
  );
}
