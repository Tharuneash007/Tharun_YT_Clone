import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { logo } from '../utilities/constants'
import { UserAuth } from '../context/AuthContext'; 

const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await createUser( email, password);
          navigate('/login')
        } catch (e) {
          setError(e.message);
          console.log(e.message);
          alert (e.code)
        }
      };

    const navigate = useNavigate()
    const paperStyle = { padding: 20,height:400, width: 300, margin: "50px auto",background:'black',boxShadow:'2px 9px 15px black' }
    const labelstyle={margin:'15px 0',background:'white',borderRadius:'5px'}
    const btnstyle1={margin:'12px 0',background:'red'}
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center' style={{color:'red'}}>
                    <img src={logo} alt="logo" height={45} style={{margin:'auto'}} />
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <div>
                    <TextField type='email' fullWidth placeholder="Enter your email" style={labelstyle} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                    <TextField type='password' fullWidth placeholder="Enter your password" style={labelstyle} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <Button type='submit' variant='contained' color='primary' style={btnstyle1} fullWidth> Sign up </Button>
                    <Typography style={{color:'white',marginLeft:'50px'}}>Already an user ?
                    <Link href="" onClick={()=>navigate('/login')} style={{color:'red',marginLeft:'15px'}} > Log In </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;