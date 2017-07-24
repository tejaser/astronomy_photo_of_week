import React from 'react';
const AstronomyCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright} = props.data;

  return(
    <div class="astronomy-card">
      <h3 class="astronomy-title">{ title }</h3>
      <a href={ hdurl } className="astronomy-image-wrapper">
        <img src={ url } alt={ title }></img>
      </a>
      <p>{explanation}</p>
      <span>{date}, {copyright} </span>
    </div>
  )
}

export default AstronomyCard;
