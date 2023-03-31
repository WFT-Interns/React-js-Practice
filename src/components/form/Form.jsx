
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const Form = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Username: ${username}, Password: ${password}`);
      setSubmitted(true);
    }
    function handleClear() {
      setUsername('');
      setPassword('');
    }
  
    return (
      <>
      <h1>Login Page</h1>
      <div className='containers'>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField sx={{ marginLeft: 65}}  label="Username" type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <TextField sx={{ marginLeft: 65,marginTop:3}} label="Password" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <br></br>
        <div className='Button'>
        <Button sx={{ marginRight: 2 ,marginLeft: 60,border: '2px solid black'}} variant='contained' color='primary' type='submit' >Login</Button>
        <Button sx={{ marginRight: 2 ,border: '2px solid black'}} variant='contained' color='primary' type='submit'  onClick={handleClear}>Clear</Button>
        <Button sx={{ marginRight: 2 ,border: '2px solid black'}}  variant='contained' color='primary' type='button' onClick={()=>navigate("/nextpage")}>Next-Page</Button>
        </div>
        {submitted && (
          <div>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
          </div>
        )}
      </form>
      
      </div>
      </>
      
    );
  }
  
  export default Form;