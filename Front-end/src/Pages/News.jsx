import React from 'react'
import axios from 'axios'
import "./news.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function News() {
    const [movies, setMovies] = useState([])
    const [currentpage, setCurrentpage] = useState(1)
    const [postperpage, setPostperpage] = useState(12)
    useEffect(() => {
        const data = async () => {
              try {
                    const {data}= await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d60637b5d9544a96895e7a46ae3e91e3")
                     setMovies(data.articles)
              } catch (error) {
                   console.log(error)
              }
         }
        data()
    }, [])

    const indexOfLastPost = currentpage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage
    const currentpost = movies.slice( indexOfFirstPost,indexOfLastPost)
    const handleNextChange = () => {
        setPostperpage((notes) => notes + 12)
       }
    return (
        <>
            <div className='Card-container'>
                {currentpost.map((movie => {
                    return (
                        <div className="homepage-content" key={movie.id}>
                             <img src={movie.urlToImage} alt="loading" className='news-image' />
                    <div className='containt'>
                            <div className="title-info">{movie.author}</div>
                            <div className="description-info">{movie.title}</div>
                          <Link to={movie.url}  > <button className='news-btn'>Read More</button></Link> 
                          </div>
                        </div>
                     )
                }))}
                 
                </div>
             <div style={{width:"100%",display:"flex" ,justifyContent:"center"}}> <button type="button" className='loadmore-btn' onClick={handleNextChange}> Load More &darr;</button></div> 
    </>
    )
}