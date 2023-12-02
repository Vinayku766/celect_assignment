import axios from "axios";
const KEY = import.meta.env.VITE_API_KEY;

export const fetchDataFromApi = async (query) => {
    const url = `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&pretty=true`;
    try {
       const {data} = await axios.get(url); 
       return data;
    } catch (error) {
        console.log(error);
    }
}
