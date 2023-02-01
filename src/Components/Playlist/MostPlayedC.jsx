import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { MdAlbum } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const MostPlayedC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    const popularPlaylist = ([
        {
            id:0,
            name:'Chill Hits',
            des:'Only greatest hits of the moment of chill tto.',
            playlistId:1976454162,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/5dd6df4139588e4d8337163a63f691dc/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:1,
            name:'Happy Hits',
            des:'Feel-good hits to give you a boost when needed!',
            playlistId:1479458365,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/0ae3fd2b9c3738edd75ba505fb2bc93d/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:2,
            name:'90s Happy Hits',
            des:'90s songs that will instantly put you in a good mood.',
            playlistId:8873744282,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/f6ae52fc58803ea80c3a4df9bcccc9ff/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:3,
            name:'Best of Pop 2021',
            des:'The best of Pop in 2021!',
            playlistId:9666268482,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/ff4a29738338687f5ce981529d27c5c5/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:4,
            name:'Home Office',
            des:'The perfect mix to work from home.',
            playlistId:1320283135,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/2753f929a0f6a82f75f6115f5e8841bd/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:5,
            name:'EDM Workout',
            des:'The finest EDM hits to support you during your favorite workout!',
            playlistId:1936903262,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/f3878c2baadb277fdbd4eaf61ea0f5e4/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:6,
            name:'TikTok Hits',
            des:'Test your challenge skills while listening to all these viral songs',
            playlistId:4403076402,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/5efcd5b0bc9fa9a796d3eb9b93997887/1000x1000-000000-80-0-0.jpg'
        },
        {
            id:7,
            name:'Nu Disco',
            des:'Enter the cosmic universe of disco!',
            playlistId:2349326262,
            img:'https://e-cdns-images.dzcdn.net/images/playlist/9ea8b27a6cf770615eff38e5c58fced2/1000x1000-000000-80-0-0.jpg'
        },            
    ])

  return (
    <>
    {!isMobile?
        <div style={{textAlign:'start',width:'25%',marginLeft:'50px',marginTop:'-60px',fontSize:'15px'}}>
            <p>The most played tracks on SoundCloud this week</p><br/>
            <div style={{display:'flex',height:'20px',paddingTop:'13px'}}>
                <MdAlbum style={{fontSize:'18px'}}/>
                <p style={{marginTop:'-3px',marginLeft:'10px'}}>Popular playlists</p>
            </div>
            <hr/>
            {popularPlaylist.map((item) => 
                    <Button variant='link' href={'/Playlist/'+item.playlistId} style={{display:'flex',marginBottom:'15px',textAlign:'start',fontSize:'18px',textDecoration:'none',color:'black',whiteSpace:'nowrap'}}>
                        <img width='65px' style={{borderRadius:'20%'}} src={item.img} />
                        <div style={{marginLeft:'10px',overflow:'hidden',marginTop:'3px'}}>
                            <p style={{textDecoration:'none',color:'black',whiteSpace:'nowrap'}}>
                                {item.name} <br/>
                                <span style={{fontSize:'11px'}}>{item.des}</span>
                            </p>
                        </div>
                    </Button>
            )}
            <p style={{textAlign:'center'}}>See all playlist</p>
        </div>
        :
        <div style={{textAlign:'start',width:'100%',marginTop:'5px',fontSize:'15px'}}>
            <Container>
                <hr/>
                <p>The most played tracks on SoundCloud this week</p><br/>
                <div style={{display:'flex',height:'20px',paddingTop:'13px'}}>
                    <MdAlbum style={{fontSize:'18px'}}/>
                    <p style={{marginTop:'-3px',marginLeft:'10px'}}>Popular playlists</p>
                </div>
                <hr/>
                {popularPlaylist.map((item) => 
                        <Button variant='link' href={'/Playlist/'+item.playlistId} style={{display:'flex',marginBottom:'15px',textAlign:'start',fontSize:'18px',textDecoration:'none',color:'black',whiteSpace:'nowrap'}}>
                            <img width='65px' style={{borderRadius:'20%'}} src={item.img} />
                            <div style={{marginLeft:'10px',overflow:'hidden',marginTop:'6px'}}>
                                <p style={{textDecoration:'none',color:'black',whiteSpace:'nowrap'}}>
                                    {item.name} <br/>
                                    <span style={{fontSize:'11px'}}>{item.des}</span>
                                </p>
                            </div>
                        </Button>
                )}
                <p style={{textAlign:'center'}}>See all playlist</p>
            </Container>
        </div>
    }
    </>
  )
}
