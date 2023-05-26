import { useEffect, useState } from 'react'
import DataService from '../services/dataService'
import IMeal from '../interfaces/meal'

type Props = {
  categorySelected: string,
  ingredientSelected: string,
  areaSelected: string
}

const Meals = ({categorySelected, ingredientSelected, areaSelected}: Props) => {
  console.log(categorySelected)
  console.log(ingredientSelected)
  console.log(areaSelected)

  const dataService = new DataService()
  const [selectedData, setSelectedData] = useState<IMeal[]>([])

  useEffect(() => {
    if(categorySelected !== ""){
      dataService
      .filterByCategories(categorySelected)
      .then((res) => {
        setSelectedData(res.data.meals)
      })
      .catch((err) => {
        console.log(err)
      })
    } 
    
    if(ingredientSelected !== ""){
      dataService
      .filterByIngredients(ingredientSelected)
      .then((res) => {
        setSelectedData(res.data.meals)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    
    if(areaSelected !== ""){
      dataService
      .filterByAreas(areaSelected)
      .then((res) => {
        setSelectedData(res.data.meals)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [categorySelected, ingredientSelected, areaSelected])

  console.log(selectedData)

  return (
    <div>
        <h1>All Meals</h1>
    </div>
  )
}

export default Meals
