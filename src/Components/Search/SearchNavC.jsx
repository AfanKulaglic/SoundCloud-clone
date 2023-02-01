import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {BsSearch } from 'react-icons/bs'

export const SearchNavC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [search,setSearch] = useState()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/Search/'+search)
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '65f8e28fc9msh740f5c710731f09p18f138jsn6eeb3143879e',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  useEffect(() => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })

  return (
    <div style={{backgroundColor:'black',paddingTop:'50px'}}>
      <Form onSubmit={handleSubmit} className='searchC' style={{padding:'10px'}}>
        <Form.Control onChange={(e) => {setSearch(e.target.value) 
            console.log(search)}} type="text" placeholder="Search" style={{width:isMobile? '80%'  : '65%',filter:'brightness(99%)'}}/>
        <BsSearch onClick={handleSubmit} className='searchC-icon' style={{marginTop:"10px"}} />
        <div style={{marginLeft:'11px',overflow:'hidden',paddingTop:'5px',marginBottom:'-8px',color:'silver'}}>
          <p>Cancel</p>
        </div>
      </Form>
    </div>
  )
}
