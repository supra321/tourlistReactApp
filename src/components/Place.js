import React from 'react';
const Place=({destination,pakage,image})=>{
	return(
		<div className ='bg-light-green dib tc br3 pa3 ma3 shadow-5 grow'>
			<img src={`${image}`} alt='' height='180' width='225' />
			<div>
				<p><strong>DESTINATION: </strong>{destination}</p>
				<p><strong>PAKAGE: </strong>{pakage}</p>
			</div>
		</div>
	);
}
export default Place;