import React from 'react';
const Place=({id,street,city/*,destination,pakage,image*/})=>{
	return(
		<div className ='bg-light-green dib tc br3 pa3 ma3 shadow-5 grow'>
			<img src={`https://source.unsplash.com/featured/${id+360}x${id+480}/?nature,travel`/*image*/} alt='' height='180' width='225' />
			<div>
				<p><strong>STREET: </strong>{street/*pakage*/}</p>
				<p><strong>CITY: </strong>{city/*destination*/}</p>
			</div>
		</div>
	);
}
export default Place;