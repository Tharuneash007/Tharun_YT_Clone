import React from 'react'
import { Grid, Paper, TextField, Button, Typography,Link } from '@mui/material'
import { useState } from 'react'
import { logo } from '../utilities/constants'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login=()=>{

    localStorage.removeItem("loggedin");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {signIn} = UserAuth();
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        localStorage.setItem("loggedin",true)
        setError('')
        try {
          await signIn(email, password)
          navigate('/')
        } catch (e) {
          setError(e.message)
          console.log(e.message)
          alert (e.code)
        }
    };



const handleSubmit = (e) => {
    e.preventDefault();
}  

    const paperStyle={padding :20,height:400,width:300, margin:"50px auto",background:'black',boxShadow:'2px 9px 15px black'}
    const btnstyle={margin:'12px 0',background:'red'}
    const labelstyle={margin:'15px 0',background:'white',borderRadius:'5px'}
    return(
        <Grid>
            <Paper style={paperStyle}>
                <div align='center' style={{color:'red'}}>
                <img src={logo} alt="logo" height={45} style={{margin:'auto'}} />
                    <h2>Log In</h2>
                </div>
                <form onSubmit={handleLogin}>
                 <div>
                 <TextField type='email' fullWidth placeholder="Enter your email" style={labelstyle} onChange={(e) => setEmail(e.target.value)} required/>
                 </div>
                 <div>
                 <TextField type='password' fullWidth placeholder="Enter your password" style={labelstyle} onChange={(e) => setPassword(e.target.value)} required/>
                 </div>
                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Log in</Button>
                 <Typography style={{color:'white',marginLeft:'20px'}}> Don't have an account ? 
                 <Link href="" onClick={()=>navigate('/register')} onSubmit={handleSubmit} style={{color:'red',marginLeft:'15px'}}> Sign Up </Link>
                 </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login