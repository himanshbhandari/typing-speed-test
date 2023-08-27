import React from 'react';
import { IoLogoOctocat } from 'react-icons/io'; // Corrected import path
import AccountCircle from './AccountCircle';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.3rem'}}>
      <span><IoLogoOctocat size="2.5em" /></span> {/* Adjust the size value as needed */}
      <span className='logo'>TypeCat</span>
      <span style={{padding:"1rem"}} onClick={()=>navigate('/')}><KeyboardIcon  size="2em"/></span>
      </div>
      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
}

export default Header;
