import React from 'react';

export default function Card(props) {
  let badgeText;
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online"){
    badgeText = "ONLINE"
  }

  // console.info({props})

  return (
    <div className='w-1/5 relative'>
      {badgeText && <div className='absolute top-2 left-2 bg-white rounded-sm font-bold p-1 text-xs'>{badgeText}</div>}
      <img className='bg-cover w-52 h-68' src= {require(`./images/${props.coverImg}`)} alt="card_image"/>
      <div className='w-auto h-fit flex items-center'>
        <img src={require('./images/Star.png')} alt="star_image"></img>
        <div>{props.stats.rating}</div>
        <p>({props.stats.reviewCount}) · {props.location}</p>
      </div>
      <div className='w-1/2'>{props.title}</div>
      <div>
        <p><span className='font-bold'>From ${props.price}</span> / Person</p>
      </div>
    </div>
  )
}