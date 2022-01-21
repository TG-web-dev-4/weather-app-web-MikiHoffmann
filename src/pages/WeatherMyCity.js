
import SearchBar from "../components/appComponents/SearchBar";
import { FlexContainer } from "../components/styledElements/Containers.styled";
import WeatherCard from "../components/appComponents/WeatherCard";
import WeatherList from "../components/appComponents/WeatherList";

import UseFetch from "../hooks/UseFetch";

export default function WeatherMyCity() {

  const { data, error, isLoading, setUrl } = UseFetch();
  
  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}...</h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };
 
  return (
    <>
    <SearchBar
    onSearch ={(city) => 
      setUrl(
        `${process.env.REACT_APP_API_URL}/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      ) }/>
      <FlexContainer>

      <WeatherCard>
        {getContent()}
      </WeatherCard>
      </FlexContainer>
    </>
  );
}
