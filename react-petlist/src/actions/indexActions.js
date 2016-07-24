import axios from 'axios';
import { ROOT_SEARCH, SITTING_SEARCH, BOARDING_SEARCH } from './types';

const rootUrl = '/static/search.json';
export function rootSearch(){
	const searchData = axios.get(`${rootUrl}`);
	return {
		type: ROOT_SEARCH,
		payload: searchData
	}
}
export function sittingSearch(){
	const sittingSearch = axios.get(`${rootUrl}?service=sitting`);
	return {
		type: SITTING_SEARCH,
		payload: sittingSearch
	}

}
export function boardingSearch(){
	const boardingSearch = axios.get(`${rootUrl}?service=boarding`);

	return {
		type: BOARDING_SEARCH,
		payload: boardingSearch
	}
}