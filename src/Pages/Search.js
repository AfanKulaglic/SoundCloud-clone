import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../Components/Navigation'
import { SearchNavC } from '../Components/Search/SearchNavC'
import { SearchList } from '../Components/Search/SearchList'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {HiOutlineHome} from "react-icons/hi";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import {BsSearch} from "react-icons/bs";
import {VscLibrary} from "react-icons/vsc";
import {MdOutlineDownloadForOffline} from "react-icons/md";

export const Search = () => {
    const {q} = useParams()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const [value, setValue] = React.useState(0);

  return (
    <div>
        <Navigation />
        <SearchNavC />
        <SearchList />
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
  )
}
