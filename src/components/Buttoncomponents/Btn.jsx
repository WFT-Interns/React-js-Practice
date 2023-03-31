import {Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function Btn() {
    const navigate=useNavigate();
    return (
      <>
      
      <h1>Welcome to the homepage</h1>
      <Button sx={{ marginLeft: 80,border: '2px solid black'}}  variant='contained' color='primary' type='button' onClick={()=>navigate("/loginpage")}>Go to Loginpage</Button>
      </> 
    )
  }
  
  export default Btn;