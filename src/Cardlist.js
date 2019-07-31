import React from 'react';
import Cards from './Cards'


const Cardlist=({robots})=>{
	const Cardcompo=robots.map((user,i)=>
		{
			return <Cards key={i} id={robots[i].id} usrname={robots[i].name} usremail={robots[i].email}/>

		})
	return(
		<div>
		
		{Cardcompo}

     
		</div>
		);
	}
export default Cardlist;