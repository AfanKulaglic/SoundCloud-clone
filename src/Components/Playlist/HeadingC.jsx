import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';

export const HeadingC = ({title}) => {
    const {id} = useParams()
    const [items,setItems] = useState([])
    const [firstLoading,setFirstLoading] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65f8e28fc9msh740f5c710731f09p18f138jsn6eeb3143879e',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    useEffect(() => {
        if(firstLoading === false) {
            fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/'+id, options)
                .then(response => response.json())
                .then(response => {setItems(response)
                    console.log(response)} )
                .catch(err => console.error(err));
            setFirstLoading(true)
        }
    })

    return (
        <div style={{textAlign:'start',paddingTop:'60px'}}>
            {isMobile ?
                <>
                    <img src={items.picture_xl} width='100%' />
                    <p style={{fontSize:'25px',fontWeight:'500'}}>{items.title} <br/> <span style={{color:'silver'}}>Made by SoundCloud</span></p>
                    <p style={{fontSize:'13px'}}>Playlist - {items.nb_tracks} Tracks - {items.creation_date}</p>
                    <p style={{fontSize:'16px',fontWeight:"600"}}>The most played tracks on SoundCloud this week</p>
                </>
                :
                <Container>
                    <div style={{height:'400px',backgroundColor:'silver',display:'flex',padding:'5vh'}}>
                        <div style={{width:'100%'}}>
                            <div style={{display:'flex'}}>
                                <BsPlayCircleFill style={{fontSize:'70px',color:'#cc4400',marginTop:'8px'}} />
                                <p style={{paddingTop:'0px',paddingLeft:'10px',fontSize:'28px',width:'85%'}}>
                                    {items.title} <br/> 
                                    <span style={{fontSize:'17px'}}>SoundCloud</span> 
                                </p>
                                <p style={{marginTop:'15px'}}>Update {items.creation_date}</p>
                            </div>
                            <div style={{borderRadius:'50%',backgroundColor:'black',textAlign:'center',width:'100px',height:'100px',marginTop:'90px',paddingTop:'15px',fontWeight:'700',fontSize:'25px'}}>
                                <p>{items.nb_tracks} </p>
                                <p style={{color:'silver',fontSize:'10px',marginTop:'-10px'}}>TRACKS</p> 
                            </div>
                        </div>
                        <img src={items.picture_xl} width='25%' height='100%' />
                    </div>
                    <div style={{marginTop:"20px",width:'72%'}}>
                        <Button style={{marginRight:'10px'}} size='sm' variant='light'>Like</Button>
                        <Button style={{marginRight:'10px'}} size='sm' variant='light'>Share</Button>
                        <Button style={{marginRight:'10px'}} size='sm' variant='light'>Add to Next up</Button>
                        <Button style={{marginRight:'10px'}} size='sm' variant='light'>Add to playlist</Button>
                        <div style={{float:'right',display:'flex'}}>
                            <BsFillHeartFill style={{marginTop:'7px',marginRight:'7px'}}/>
                            <p style={{marginTop:'3px'}}>{items.fans}</p>
                        </div>
                    </div>
                    <hr style={{width:'72%'}} />
                </Container>
            }
        </div>
    )
}
