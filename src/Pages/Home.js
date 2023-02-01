import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import NavigationC from '../Components/Navigation.jsx'
import CarouselC from "../Components/Home/CarouselC";
import SearchC from "../Components/Home/SearchC";
import TrendingC from "../Components/Home/TrendingC";
import BanerC from "../Components/Home/BanerC";
import FooterC from "../Components/Home/FooterC";
import { HiOutlineHome } from 'react-icons/hi';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { BsSearch } from 'react-icons/bs';
import { VscLibrary } from 'react-icons/vsc'
import { MdOutlineDownloadForOffline } from 'react-icons/md'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    const [value, setValue] = React.useState(0);

    return (
        <div>
            <NavigationC />
            <CarouselC />
            <SearchC />
            <TrendingC />
            <BanerC />
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
        </div>
    );
}

export default Home;