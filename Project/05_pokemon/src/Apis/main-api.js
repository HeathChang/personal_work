// import httpStatus from 'http-status';
// import Axios, { AxiosRequestConfig } from 'axios';


//
// get = async (url, req) => {
// 	const config: AxiosRequestConfig = await this.getRequestConfig(req);
// 	return this.axios.get(url, config);
// };


export const fnSearch = async (pokemon) => {
	console.log(pokemon)
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
		method : 'GET',
		headers : {
			'Content-Type' : 'application/json'
		}
	})
	return res.json()
};


