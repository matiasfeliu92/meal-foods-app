import React, { useState } from 'react';
import './App.css';
import Meals from './components/Meals';
import Areas from './components/Areas';
import Categories from './components/Categories';
import Ingredients from './components/Ingredients';
import ICategories from './interfaces/categories';

function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [ingredientSelected, setIngredientSelected] = useState('')
  const [areaSelected, setAreaSelected] = useState('')

  return (
    <div className="App">
      <Categories onSelect={(category: string) => setCategorySelected(category)} categorySelected={categorySelected} setCatSelect={setCategorySelected}/>
      <Ingredients onSelect={(ingredient:string) => setIngredientSelected(ingredient)} selectedIngredient={ingredientSelected} setIngredientSelect={setIngredientSelected}/>
      <Areas onSelect={(area:string) => setAreaSelected(area)} selectedArea={areaSelected} setAreaSelected={setAreaSelected}/>
      <Meals categorySelected={categorySelected} ingredientSelected={ingredientSelected} areaSelected={areaSelected}/>
    </div>
  );
}

export default App;
