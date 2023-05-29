import ICategories from "../interfaces/categories";
import IMeal from "../interfaces/meal";
import api from "./axios";

class DataService {
    getCategories() {
        return api.get('/list.php?c=list')
    }

    getAreas() {
        return api.get('/list.php?a=list')
    }

    getIngredients() {
        return api.get('/list.php?i=list')
    }

    filterByCategories(category: string): Promise<IMeal[]> {
        console.log(category)
        return api.get(`/filter.php?c=${category}`)
            .then((response) => response.data.meals);
    }

    filterByIngredients(ingredient: string): Promise<IMeal[]> {
        console.log(ingredient)
        return api.get(`/filter.php?i=${ingredient}`)
            .then((response) => response.data.meals);
    }

    filterByAreas(area: string): Promise<IMeal[]> {
        console.log(area)
        return api.get(`/filter.php?a=${area}`)
            .then((response) => response.data.meals);
    }
}

export default DataService;
