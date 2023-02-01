import React,{useState} from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Navigation() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    return (
        <div>
            {!isMobile?
                <Container>
                    <Navbar className='navbar-d' collapseOnSelect expand="lg" bg="transparent" variant="dark">
                            <Navbar.Brand href="#home">
                                <img width='150px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Soundcloud_logo.svg/2560px-Soundcloud_logo.svg.png' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav style={{marginLeft:'auto'}}>
                                    <Nav.Link href="#deets">
                                        <Button variant='outline-dark'>Sign In</Button>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant='outline-dark' style={{backgroundColor:'#cc4400',borderRadius:'0px'}}>Create account</Button>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant='outlined'>For Artists</Button>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </Container>
                :
                <Navbar className='navbar-m' collapseOnSelect expand="lg"  style={{padding:'9px',position:'fixed',zIndex:'1',width:'100%'}}>
                    <Navbar.Brand href="#home">
                        <img width='50px' src='https://www.pngall.com/wp-content/uploads/9/SoundCloud-Vector-PNG.png' />
                    </Navbar.Brand>
                    <div style={{display:'flex'}}>
                        <Nav.Link href="#deets">
                            <Button variant='outline' style={{color:'white'}}>Sign In</Button>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Button variant='outline-dark' style={{backgroundColor:'#cc4400'}}>Listen in app</Button>
                        </Nav.Link>
                    </div>
                </Navbar>
            }
        </div>
    );
}

export default Navigation;