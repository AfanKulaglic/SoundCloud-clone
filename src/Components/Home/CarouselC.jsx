import React,{useState} from 'react';
import {Carousel,Container,Button} from "react-bootstrap";
import baner from '../../Images/baner.jpg'

function CarouselC() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    return (
        <div>
        {!isMobile ?
            <Container>
                <Carousel indicators={false} slide={false} controls={false} style={{borderTop:'5px solid #cc4400'}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={baner}
                            alt="First slide"
                            height='400px'
                        />
                        <Carousel.Caption className='carousel-caption-d'>
                            <h3>Connect on SoundCloud</h3>
                            <p>Discover, stream, and share a constantly expanding mix of music <br/>  from emerging and major artists around the world.</p>
                            <Button variant='outline-dark' style={{borderRadius:'0px'}}>Sign up for free</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            :
            <Carousel indicators={false} slide={false} controls={false} style={{paddingTop:'7vh'}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://m.sndcdn.com/_next/static/images/home-page-featured-artists-hero-image-b56192255a09291e39b03a20aa0a0f04.jpg'
                        alt="First slide"
                        height='400px'
                    />
                    <Carousel.Caption style={{width:'90%',marginLeft:'-10%'}}>
                        <h3 style={{fontSize:'35px',textAlign:'start'}}>What's next in music is first on SoundCloud</h3>
                        <Button variant='dark' style={{borderRadius:'0px',border:'2px solid transparent',width:'100%',fontWeight:'600'}}>Create a free account</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        }
        </div>
    );
}

export default CarouselC;