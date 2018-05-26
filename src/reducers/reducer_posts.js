import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action){
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id'); //use lodash to convert the array to an object with the key of the object behing the id
		default:
			return state;
	}
}