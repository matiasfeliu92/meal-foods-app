import ICategories from "../interfaces/categories";
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

    filterByCategories(category: string) {
        console.log(category)
        return api.get(`/filter.php?c=${category}`)
    }

    filterByIngredients(ingredient: string) {
        console.log(ingredient)
        return api.get(`/filter.php?i=${ingredient}`)
    }

    filterByAreas(area: string) {
        console.log(area)
        return api.get(`/filter.php?a=${area}`)
    }
}

export default DataService