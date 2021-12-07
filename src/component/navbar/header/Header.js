import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyle";




const Header = ({setQuery, query, getData, mealTypes, setMeal, meal}) => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <Form />
    </HeaderContainer>
  );
};

export default Header;
