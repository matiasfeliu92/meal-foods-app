import React, { useState } from "react";
import "./App.css";
import Meals from "./components/Meals";
import Areas from "./components/Areas";
import Categories from "./components/Categories";
import Ingredients from "./components/Ingredients";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/navbar.css";
import GlobalStyle from "./utils/GlobalStyles";

function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [ingredientSelected, setIngredientSelected] = useState("");
  const [areaSelected, setAreaSelected] = useState("");

  return (
    <>
    <GlobalStyle/>
    <div>
        <div className="navbar d-flex justify-content-around">
          <img className="img-thumb" src="https://www.themealdb.com/images/meal-icon.png"/>
          <Categories
            onSelect={(category: string) => setCategorySelected(category)}
            categorySelected={categorySelected}
            setCatSelect={setCategorySelected}
          />
          <Ingredients
            onSelect={(ingredient: string) => setIngredientSelected(ingredient)}
            selectedIngredient={ingredientSelected}
            setIngredientSelect={setIngredientSelected}
          />
          <Areas
            onSelect={(area: string) => setAreaSelected(area)}
            selectedArea={areaSelected}
            setAreaSelected={setAreaSelected}
          />
        </div>
      <Meals
        categorySelected={categorySelected}
        ingredientSelected={ingredientSelected}
        areaSelected={areaSelected}
      />
    </div>
    </>
  );
}

export default App;
