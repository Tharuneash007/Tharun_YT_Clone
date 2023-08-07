import React from 'react'
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {logo} from '../utilities/constants'
import SearchBar from "./SearchBar";
import { UserAuth } from '../context/AuthContext';

const Navbar = () =>{
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return(
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    pt={1}
    sx={{position: 'sticky' , background: '#000', top:0, justifyContent: 'space-between'}}>
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
      <Stack >
      <img className='tharun' src="https://xsgames.co/randomusers/assets/avatars/male/27.jpg" alt="logo" height={47} width={47} style={{marginBottom:'5px',paddingLeft:'3px'}}/>
      <button style={{background:'#FC1503',color:'white',border:'none',borderRadius:'20px',padding:'3px 5px',cursor:'pointer',marginBottom:'-3px'}} className='logout' onClick={handleLogout}>Log out</button>
      </Stack>
    </Stack>
  )
}

export default Navbar