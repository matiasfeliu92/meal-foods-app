import React, { useState } from "react";
import "./App.css";
import Meals from "./components/Meals";
import Areas from "./components/Areas";
import Categories from "./components/Categories";
import Ingredients from "./components/Ingredients";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/navbar.css";
import "./styles/header.css";

function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [ingredientSelected, setIngredientSelected] = useState("");
  const [areaSelected, setAreaSelected] = useState("");

  return (
    <div style={{backgroundColor: 'lightsalmon', height: "100%"}}>
      <div className="header">
        <h1>Meals App</h1>
      </div>
      <div className="navbar d-flex justify-content-around">
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
  );
}

export default App;
