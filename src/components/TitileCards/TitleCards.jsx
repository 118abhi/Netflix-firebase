import React, { useEffect,useRef, useState } from 'react'
import './TitileCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

const [ApiData,SetApiData] = useState([]);
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjIyYWE1MGVkZmFlNWJhMzBlYmU0ZGJmY2I0MWNjZCIsInN1YiI6IjY2M2ZjZDQzYTYwNDJjMWIxNWZlY2ZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PrUGJ_p4Hf-aUsOrv5_7ytUxPF4dMlU9fAwPbW3qnA4'
  }
};


const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
  useEffect(()=> {
 
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => SetApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])


  return (
    <div className='TitleCards'>
        <h2>{title?title: "Populer on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {ApiData.map((card,index)=>{
            return  <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards