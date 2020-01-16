import {CHANGE_SEARCHED_ITEM} from './constants.js'
export const setSearcheditem=(text)=>({
	type:CHANGE_SEARCHED_ITEM,
	payload:text
})