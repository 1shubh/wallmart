import React, { useState } from 'react'
import {Box,Button,FormControl,Input,Heading,FormLabel} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/auth/authAction';



export const Login = () => {
    const [loginCreds, setLoginCreds] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
      const dispatch = useDispatch();
      const { loading, error } = useSelector((state) => state.auth);

      const navigate = useNavigate()
      const handleChangeIt = (e) => {
        const { name, value } = e.target;
        setLoginCreds({
          ...loginCreds,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (loginCreds.email && loginCreds.password) {
          dispatch(login(loginCreds));
          navigate("/")
        }
      };
      if (loading) return <div>Loading...</div>;
      else if (error) return <div>Error...</div>;
  return (
    <div style={{width:"40%",margin:"auto",marginTop:"200px",border:"0px solid black",textAlign:"center",backgroundColor:"white",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Heading>Login</Heading>
        <Box marginTop={"20px"} border="0px solid black" padding={"50px"}>
            <FormControl>
            <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Enter Email' value={loginCreds.email} onChange={handleChangeIt} />
                <FormLabel>Password</FormLabel>
                <Input type={"password"} placeholder="Enter Password" value={loginCreds.password} onChange={handleChangeIt}/>
            </FormControl>
            <Button colorScheme={"blue"} onClick={handleSubmit}>Login</Button>
        </Box>
    </div>
  )
}
