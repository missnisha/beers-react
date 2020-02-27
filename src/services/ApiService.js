import axios from "axios"
const API_BASE_URL = 'https://api.punkapi.com/v2/beers';
function fetchBeers(page, perPage){
    return new Promise(async (resolve,reject) => { 
        try{
            const response = await axios.get(`${API_BASE_URL}?page=${page}&per_page=${perPage}`)
            resolve(response.data);
        } catch(err){
            reject('Error fetching');
        }
    })
}
export {
    fetchBeers

}