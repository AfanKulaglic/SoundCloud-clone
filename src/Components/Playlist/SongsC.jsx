import React, {useEffect, useState} from 'react';
import {Card, Col, Row,Button,Container} from "react-bootstrap";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "react-h5-audio-player";
import {Link, useParams} from "react-router-dom";
import { FaPlay } from 'react-icons/fa';

function SongsC() {
    const {id} = useParams()
    const [items,setItems] = useState([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const [music,setMusic] = useState('https://cdns-preview-0.dzcdn.net/stream/c-0f43035b21f9ce0dbf0cbcb78da9fd24-5.mp3')
    const [musicName,setMusicName] = useState('Flowers')
    const [musicPhoto,setMusicPhoto] = useState('https://e-cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/1000x1000-000000-80-0-0.jpg')
    const [musicAuthor,setMusicAuthor] = useState('Miley Cyrus')

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65f8e28fc9msh740f5c710731f09p18f138jsn6eeb3143879e',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/'+id, options)
        .then(response => response.json())
        .then(response => {setItems(response.tracks.data)
            console.log(response)} )
        .catch(err => console.error(err));
    })

    return (
            <Row md={1} xs={1} style={{width:isMobile ? '99%' : '72%'}}>
                <>
                    {items.map((item,index) => (
                        <>
                            <Col style={{padding:isMobile ? '20px' : '1px'}}>
                                <Card className='trending-card' style={{ height:isMobile ? '8.0rem' : '2.2rem',textAlign:'start',width:'100%',marginLeft:'12px'}}>
                                    {!isMobile?
                                        <div style={{display:'flex'}} onClick={() => {
                                                setMusic(item.preview)
                                                setMusicName(item.title)
                                                setMusicPhoto(item.album.cover_xl)
                                                setMusicAuthor(item.artist.name)
                                            }}>
                                                <Card.Img variant="top" src={item.album.cover_xl} style={{width:'30px',height:'30px'}} />
                                                <Card.Body style={{whiteSpace:'nowrap',overflow:'hidden',marginTop:'-12px',display:'flex',height:'60px'}}>
                                                    <div style={{width:'96%',display:'flex'}}>
                                                        <Card.Text style={{marginTop:'-3px',marginRight:'10px'}}>
                                                            {index+1}
                                                        </Card.Text>
                                                        <Card.Title style={{fontSize:'15px',marginRight:'10px'}}>
                                                            {item.title}
                                                        </Card.Title>
                                                        <Card.Text style={{color:'silver',fontSize:'13px'}}>
                                                            - {item.artist.name}
                                                        </Card.Text>
                                                    </div>
                                                    <Card.Text style={{color:'silver',display:'flex',fontSize:'13px',marginTop:'0px',justifyContent:'flex-end'}}>
                                                        <FaPlay style={{marginRight:'5px'}}/>
                                                        {item.rank}
                                                    </Card.Text>
                                                </Card.Body>
                                        </div>
                                        :
                                        <div style={{display:'flex'}} onClick={() => {
                                                setMusic(item.preview)
                                                setMusicName(item.title)
                                                setMusicPhoto(item.album.cover_xl)
                                                setMusicAuthor(item.artist.name)
                                            }}>
                                                <Card.Img variant="top" src={item.album.cover_xl} style={{width:'110px'}} />
                                                <Card.Body style={{whiteSpace:'nowrap',overflow:'hidden'}}>
                                                    <Card.Title>
                                                        {item.title}
                                                    </Card.Title>
                                                    <Card.Text style={{color:'silver'}}>
                                                        {item.artist.name}
                                                    </Card.Text>
                                                    <Card.Text style={{color:'silver',display:'flex',fontSize:'13px'}}>
                                                        <FaPlay style={{marginTop:'4px',marginRight:'5px'}}/>
                                                        {item.rank}
                                                    </Card.Text>
                                                </Card.Body>
                                        </div>
                                    }
                                    <div>
                                    </div>
                                </Card>
                            </Col>
                        </>
                    ))}
                </>
                {/* AudioPlayer */}

                <div style={{backgroundColor:'silver',display:"flex",bottom:!isMobile ? '0px' : '0px',position:'fixed',textAlign:'start',width:'100%',left:'0',height:isMobile? '107px' : '50px'}}>
                    <Container style={{display:'flex'}}>
                        <AudioPlayer
                            showSkipControls={false}
                            showJumpControls={false}
                            showFilledProgress={true}
                            showFilledVolume={true}
                            showDownloadProgress={false}
                            layout={"horizontal-reverse"}
                            src={music}
                            onPlay={e => console.log("onPlay")}
                            style={{width:'72%',backgroundColor:'silver',height:'10px',marginLeft:isMobile ? '-30px' : '0px'}}
                        />
                        <div style={{display:'flex',justifyContent:'start',width:'20%',whiteSpace:'nowrap'}}>
                            <img src={musicPhoto} width='50px' height='50px' style={{padding:isMobile ? '0px' : '6px',paddingLeft:'3px'}}/>
                            <div>
                                <p style={{fontSize:'17px',paddingTop:'3px'}}>{musicName}</p>
                                <p style={{marginTop:'-2.5vh',color:'silver'}}>{musicAuthor}</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </Row>
    );
}

export default SongsC;
