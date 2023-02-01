import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TrendingC from '../Components/Playlist/SongsC';
import { HeadingC } from '../Components/Playlist/HeadingC';
import Navigation from '../Components/Navigation'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BsSearch } from 'react-icons/bs';
import { VscLibrary } from 'react-icons/vsc'
import { MdOutlineDownloadForOffline } from 'react-icons/md'
import { HiOutlineHome } from 'react-icons/hi';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FooterC from '../Components/Home/FooterC';
import { Container } from 'react-bootstrap';
import { MostPlayedC } from '../Components/Playlist/MostPlayedC';
import SongsC from '../Components/Playlist/SongsC';

function Playlist() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Navigation />
            <HeadingC />
            <div> 
                {!isMobile ?
                    <Container style={{display:'flex'}}>
                        <SongsC />
                        <MostPlayedC />
                    </Container>
                    :
                    <>
                        <SongsC/>
                        <MostPlayedC />
                    </>
                }   
            </div>
            <FooterC />
            {isMobile &&
                <Box style={{position:'fixed',bottom:'0',width:'100%'}}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        style={{backgroundColor:'black',color:'white'}}
                    >
                        <BottomNavigationAction label="Home" icon={<HiOutlineHome />} />
                        <BottomNavigationAction label="Feed" icon={<DynamicFeedIcon />} />
                        <BottomNavigationAction label="Search" icon={<BsSearch />} />
                        <BottomNavigationAction label="Library" icon={<VscLibrary />} />
                        <BottomNavigationAction label="Search" icon={<MdOutlineDownloadForOffline />} />
                    </BottomNavigation>
                </Box>
            }
        </>
    );
}

export default Playlist;