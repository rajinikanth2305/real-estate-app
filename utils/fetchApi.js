import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'f97948d1e5msha51639adf397aaap17e962jsn22097823e223',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
    
  return data;
}