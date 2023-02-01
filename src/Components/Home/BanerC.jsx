import React,{useState} from 'react';
import {Container,Button} from "react-bootstrap";

function BanerC() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    return (
        <>
            {!isMobile &&
            <Container>
                <div style={{
                    backgroundImage: 'url(https://i.ibb.co/WD4qvFM/Screenshot-2023-01-21-080307-2.jpg)',
                    height: '450px',
                    backgroundSize: '100% 100%',
                    textAlign:'start',
                    paddingRight:'45px',
                    paddingLeft:'70%',
                    paddingTop:'150px'
                }}>
                    <h2>Never stop listening</h2>
                    <p>SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</p>
                </div>
                <div style={{
                    backgroundImage: 'url(https://i.ibb.co/q5MT5v8/Screenshot-2023-01-25-192337.jpg)',
                    height: '350px',
                    backgroundSize: '100% 100%',
                    textAlign:'start',
                    paddingRight:'60%',
                    paddingLeft:'45px',
                    paddingTop:'100px'
                }}>
                    <h2>Calling all creators</h2>
                    <p>Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                    <Button>Find out more</Button>
                </div>
            </Container>
            }
        </>
    );
}

export default BanerC;