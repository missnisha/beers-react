import { fetchBeers } from '../services/ApiService';
class BeersLogic {
    static getBeers(page, perPage){
        return fetchBeers(page, perPage);
    }
}
export default BeersLogic;