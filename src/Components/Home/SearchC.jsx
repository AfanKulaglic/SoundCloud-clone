import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import {BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
function SearchC() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const [search,setSearch] = useState()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate('/Search/'+search)
    }

    return (
        <Container style={{paddingTop:'3vh',paddingBottom:'2vh'}}>
            <Form onSubmit={handleSubmit} className='searchC'>
                <Form.Control onChange={(e) => {setSearch(e.target.value) 
                    console.log(search)}} type="text" placeholder="Search for artists, bands, tracks" style={{width:isMobile? '80%'  : '65%',filter:'brightness(99%)'}}/>
                <BsSearch onClick={handleSubmit} className='searchC-icon' />
            </Form>
        </Container>
    );
}

export default SearchC;