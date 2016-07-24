import {
	ROOT_SEARCH,
	BOARDING_SEARCH,
	SITTING_SEARCH
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type){
		case ROOT_SEARCH:
			return {...state, data: action.payload.data.search}
		case BOARDING_SEARCH:
			return {...state, data: action.payload.data.search}
		case SITTING_SEARCH:
			return {...state, data: action.payload.data.search}
	}
	return state;
}