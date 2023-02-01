import { Diversity2 } from '@mui/icons-material';
import React, { useState } from 'react';
import {Button} from "react-bootstrap";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function FooterC() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    return (
        <div style={{padding:'10px',marginBottom:!isMobile? '50px' : '110px'}}>
            {!isMobile?
                <>
                    <p style={{fontSize:'35px',marginTop:'40px'}}>Thanks for listening.Now join in.</p>
                    <p style={{fontSize:'20px'}}>Save tacks, follow artists and build playlist.All for free.</p><br/>
                    <Button style={{backgroundColor:'#cc4400',borderRadius:'0px',fontSize:'18px',width:'200px'}} variant='outlined' >Create account</Button>
                    <div style={{display:'flex',justifyContent:'center',padding:'10px'}}>
                        <p style={{paddingTop:'13px',paddingRight:'10px'}}>Already have an account?</p>
                        <Button variant='outline-light'>Sign In</Button>
                    </div>

                    <br/>
                    <br/>
                    <hr/>
                    <p style={{textAlign:'start'}}>Directory ⁃ About us ⁃ Artist Resources ⁃ Blog ⁃ Jobs ⁃ Developers ⁃ Help ⁃ Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Consent Manager ⁃ Imprint ⁃ Charts</p>
                </>
                :
                <div style={{textAlign:'start',paddingLeft:'5px',fontSize:'13px',fontWeight:'500'}}>
                    <h2>Enjoy the full SoundCloud experience in the app</h2>
                    <img src='https://m.sndcdn.com/_next/static/images/English-2c0ad42774f0308a9762d7184607bb73.png' width='150px' style={{marginBottom:'10px'}}/>
                    <p>Charts</p>
                    <p>Company</p>
                    <p>About us</p>
                    <p>Directory</p>
                    <p>Blog</p>
                    <p>Jobs</p>
                    <p>Developers</p>
                    <p>Legal</p>
                    <p>Consent Manager</p>
                    <p>Copyright</p>
                    <div style={{display:'flex',fontSize:'20px'}}>
                        <BsInstagram style={{fontSize:'30px',marginRight:'30px'}} />
                        <BsFacebook style={{fontSize:'30px',marginRight:'30px'}}  />
                        <BsTwitter style={{fontSize:'30px'}} />
                    </div>
                    <p style={{color:'silver',marginTop:'30px',fontSize:'15px'}}>@ 2020 SoundCloud</p>
                </div> 
            }
        </div>
    );
}

export default FooterC;