import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Card.css';
export default function Card({ cat }) {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await axios.get(
  //       cat ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=7328840c8ea54e409510c308b56270ac` :
  //         "https://newsapi.org/v2/top-headlines?country=us&apiKey=7328840c8ea54e409510c308b56270ac").then((res) => setData(res.data.articles))
  //   }
  //   const res = fetchdata();
  //   console.log(res)
  // }, [cat])

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(cat ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=7328840c8ea54e409510c308b56270ac` :
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7328840c8ea54e409510c308b56270ac"); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cat]);

console.log(data)
  return (
    <>
      <div className='container'>
        <div className="row">

        {data?.articles.map((value, index) => (
          // <div style={{backgroundColor:"red" ,marginTop: '20px'}} key={index}>{item.name}</div> 

          <li className="cards_item my-5">
          <div className="card">
            <div className="card_image">
              <img src={value.urlToImage} />
            </div>
            <div className="card_content">
              <h2 className="card_title">{value.title}</h2>
              <p className="card_text">{value.author}</p>
              <p className="card_text">{value.publishedAt}</p>
              <a href={value.url} target="blank"><button className="btn card_btn">Read More</button></a>
            </div>
          </div>
        </li>
        ))}

        </div>
      </div>
    </>
  )
}
