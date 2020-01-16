import React from 'react';
import Place from './Place';
const Placeset=({placelists})=>{
	return(
		<div>
		{
			placelists.map((user,i)=>{
				return <Place key={i} id={placelists[i].id} street/*destination*/={placelists[i].address.street/*destination*/} /*pakage={placelists[i].pakage}*/ /*image*/city={placelists[i].address.city/*image*/} />
			})
		}
		</div> 
	);
}
export default Placeset;