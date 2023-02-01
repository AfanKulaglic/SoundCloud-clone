import React, {useEffect, useState} from 'react';
import {Card, Col, Row,Button,Container} from "react-bootstrap";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "react-h5-audio-player";
import {Link} from "react-router-dom";
import { FaPlay } from 'react-icons/fa';

function TrendingC() {
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
        fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/2098157264', options)
        .then(response => response.json())
        .then(response => {setItems(response.tracks.data)
            console.log(response)} )
        .catch(err => console.error(err));
    })

    return (
        <Container>
            {!isMobile ?
                <p style={{fontWeight:'400',fontSize:'25px'}}>Hear what's trending for free in the SoundCloud community</p>
                :
                <p style={{textAlign:'start',fontWeight:'700',fontSize:'22px'}}>Trending tracks on SoundCloud</p>
            }
            <Row md={6} xs={1}>
                <>
                    {items.map((item,index) => (
                        <>
                        {index<[!isMobile? 12 : 4] &&
                            <Col style={{padding:'20px'}}>
                                <Card className='trending-card' style={{ height:isMobile ? '8.0rem' : '16rem',textAlign:'start',border:'2px solid transparent'}}>
                                    {!isMobile?
                                        <div onClick={() => {
                                            setMusic(item.preview)
                                            setMusicName(item.title)
                                            setMusicPhoto(item.album.cover_xl)
                                            setMusicAuthor(item.artist.name)
                                        }}>
                                            <Card.Img variant="top" src={item.album.cover_xl} style={{zIndex:'-1'}}/>
                                            <Card.Body style={{whiteSpace:'nowrap',overflow:'hidden'}}>
                                                <Card.Title>
                                                    {item.title}
                                                </Card.Title>
                                                <Card.Text style={{color:'silver'}}>
                                                    {item.artist.name}
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
                                            <Card.Img variant="top" src={item.album.cover_xl} style={{width:isMobile && '110px'}} />
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
                        }
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

                <div style={{textAlign:'center',width:'100%',paddingBottom:!isMobile ? '80px' : '10px'}}>
                    {!isMobile ?
                        <Button href='/Playlist/2098157264' variant='outline-dark' style={{backgroundColor:'#cc4400',whiteSpace:'nowrap',borderRadius:'0px',border:'2px solid transparent',fontSize:'18px'}}>Explore trending playlist</Button>
                        :
                        <p style={{fontWeight:'600'}}> <Link style={{color:'silver',textDecoration:'none'}} to='/Playlist/2098157264'>See all tracks</Link> </p>
                    }
                </div>
                {isMobile &&
                    <div style={{textAlign:'start',marginBottom:'30px',overflow:'hidden'}}>
                        <h4>Charts: Top 50</h4>
                        <p style={{color:'silver'}}>The most played tracks on SoundClound this week</p>
                        <img src='https://i1.sndcdn.com/artworks-MySsOSRyYYx2fmG9-K5CS4w-t240x240.jpg' width='130px' />
                        <p style={{color:'silver'}}>All music genres <br/> Top 50</p>

                        <div style={{height:'14px',backgroundColor:'silver',marginBottom:'30px',marginLeft:'-10vh',marginRight:'-10vh'}}></div>

                        <h4>Charts: New & hot</h4>
                        <p style={{color:'silver'}}>Up-and-coming tracks on SoundCloud</p>
                        <img src='https://i1.sndcdn.com/artworks-QEgoG3g23EYOKivS-L0PocA-t240x240.jpg' width='130px' />
                        <p style={{color:'silver'}}>All music genres <br/> New & hot</p>
                    
                        <div style={{height:'14px',backgroundColor:'silver',marginLeft:'-10vh',marginRight:'-10vh'}}></div>
                    </div>
                }
            </Row>
        </Container>
    );
}

export default TrendingC;