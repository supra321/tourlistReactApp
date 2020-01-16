import {CHANGE_SEARCHED_ITEM} from './constants.js'
const initialState={
	searcheditem:''
}
export const searchPlaces=(state=initialState,action={})=>{
	switch(action.type){
		case CHANGE_SEARCHED_ITEM:
			return Object.assign({},state,{searcheditem:action.payload});
		default:
			return state;
	}
}