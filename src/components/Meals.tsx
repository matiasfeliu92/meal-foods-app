import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import IMeal from "../interfaces/meal";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

type Props = {
  categorySelected: string;
  ingredientSelected: string;
  areaSelected: string;
};

const Meals = ({
  categorySelected,
  ingredientSelected,
  areaSelected,
}: Props) => {
  console.log(categorySelected);
  console.log(ingredientSelected);
  console.log(areaSelected);

  const dataService = new DataService();
  const [selectedData, setSelectedData] = useState<IMeal[]>([]);

  useEffect(() => {
    if (categorySelected !== "") {
      dataService.filterByCategories(categorySelected)
        .then((res) => {
          setSelectedData(res.data.meals);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    if (ingredientSelected !== "") {
      dataService.filterByIngredients(ingredientSelected)
        .then((res) => {
          setSelectedData(res.data.meals);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    if (areaSelected !== "") {
      dataService.filterByAreas(areaSelected)
        .then((res) => {
          setSelectedData(res.data.meals);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categorySelected, ingredientSelected, areaSelected]);
  
  console.log(selectedData);

  if(categorySelected === "" && ingredientSelected === "" && areaSelected === "") {
    return (
      <div className="container w-100">
      <div className="row">
        <div className="mt-12 justify-content-center text-center">
          <h1>Select one category or one ingredient or one area</h1>
        </div>
      </div>
    </div>
    )
  }

  if(selectedData === null) {
    return (
      <div className="container w-100">
      <div className="row">
        <div className="mt-12">
          <h1>Not meals were found</h1>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className="container w-100">
      <div className="row">
        {selectedData.map((item: IMeal) => (
          <div className="col-md-4 mt-4 mb-4" key={item.idMeal}>
            <Card>
              <Card.Img variant="top" src={item.strMealThumb} alt={item.idMeal} />
              <Card.Body>
                <Card.Title>{item.strMeal}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
