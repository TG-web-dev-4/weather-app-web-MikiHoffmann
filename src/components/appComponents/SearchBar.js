import { FlexContainer } from "../styledElements/Containers.styled";
import { SearchContainer } from "../styledElements/Containers.styled";
import { StyledSearchBar } from "../styledElements/Input.styled";
import { Button } from "../styledElements/Buttons.styled";

import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [city, setCity] = useState("");
  //console.log(city)

  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSearch()
    }
  }

  return (
    <>
      <FlexContainer>
        <SearchContainer>
          <StyledSearchBar
            placeholder="Enter your city..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={onKeyDown}
          />
          <Button onClick={() => onSearch(city)}>Get my weatherinfo</Button>
        </SearchContainer>
      </FlexContainer>
    </>
  );
};

export default SearchBar;
