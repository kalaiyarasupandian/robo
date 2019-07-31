import React from 'react';
const Cards=({id,usrname,usremail})=>{
  return(
<div className=" bg-light-blue dib br3 pa3 ma2 grow">
<img alt="robo" src={`https://robohash.org/${id}`}/>
<div>
<h2>{usrname}</h2>
<h2>{usremail}</h2>
</div>
</div>
  	);
}
export default Cards;