import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './notes.css';

export default function Notes() {
     const [notes, setNotes] = useState([])

     useEffect(() => {
          const data = async () => {
               try {
                    const res = await axios.get("http://localhost:5000/api/notes")
                    setNotes(res.data)
               } catch (error) {
                    console.log(error)
               }
          }
          data()
     }, [notes])

     const handleDelete = async (id) => {
          try {
               await axios.delete(`http://localhost:5000/api/notes/` + id)
          } catch (err) {
               console.log(err)
          }
     }

     return (
          <>
               <nav className='navbar'>
                    <div className='itams'><i className="fa fa-bars" aria-hidden="true"></i>Notes</div>
               </nav>
               <Link to='/addnotes' className='btn'><button className='post-btn'>Add Post</button></Link>
               <div className='Card-container'>
                    {notes.map((note => {
                         return (
                              <div className="content" key={note.id}>
                                   <div className='icon-container' >
                                        <Link to={`/update/${note.id}`} className='icon1'><i className="fa fa-pencil-square-o " aria-hidden="true"></i></Link>
                                        <i className="fa fa-trash-o icon2" onClick={() => handleDelete(note.id)} ></i>
                                   </div>
                                   <div className="title-info">{note.title}</div>
                                   <div className="description-info">{note.description}</div>
                              </div>
                         )
                    }))}
               </div>
          </>
     )
}
