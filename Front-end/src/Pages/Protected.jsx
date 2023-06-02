import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
export default function Protected( props) {
    const {Component} = props;
    const novigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem("login")
        if (!login){
            novigate("/login")
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}
