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
}

export default DataService