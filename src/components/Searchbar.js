import React from 'react';
const Searchbar=({onSearchChange})=>{
	return(
		<input className='tc pa2 ba-1 b--gold bg-light-yellow' type='search' placeholder='Search Tour Places' onChange={onSearchChange} />
	);
}
export default Searchbar;