import "./login.css";
import { Input, Button, TextField } from "@mui/material";
import { React, useState } from "react";
import { Box, Stack } from "@mui/system";
import com from "./../bridge/fetch.js";
// import { axios } from "axios";
import { useNavigate } from 'react-router-dom';

const axios = require('axios');
const SignUp = () => {
  const navigate = useNavigate();

  const [signUpFName, setSignUpFName] = useState("");
  const [signUpLName, setSignUpLName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUppassword, setSignUpPassword] = useState('');
  const [signUpLocation, setSignUpLocation] = useState("");
  const [signUpPostnumber, setSignUpPostnumber] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");
  
  // const update = async(e) =>{
  //   e.preventDefault();
  //  await axios.put(`${endpoint}${id}`, {
  //       description:description,
  //       price:price,
  //      stock:stock
  //   })
  //   navigate('/');
  // }

  const SignUpSubmit = async (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const city = document.getElementById("city").value;
    const postnumber = document.getElementById("postnumber").value;
    const phone = document.getElementById("phone").value;
    com( `https://wbs-backend-finalproject.herokuapp.com/register/${firstname}/${lastname}/${email}/${password}/${phone}/${city}/${postnumber}`, function(e){} );
   navigate("/")
  /*await axios.post(`https://wbs-backend-finalproject.herokuapp.com/register/${firstname}/${lastname}/${email}/${password}/${phone}/${city}/${postnumber}`,{}
    // https://wbs-backend-finalproject.herokuapp.com/register/FIRSTNAME/LASTNAME/EMAIL/PHONE/CITY/PCODE/STATUSINFO
    ).then((json)=>{
         if (json.length > 0) {
          sessionStorage.setItem("Register", 1);
        } else {
          sessionStorage.setItem("Register fail", 0);
        }
    });*/
     
  };

  return (
    <div className="container">
      <Box
        sx={{ flexDirection: "row" }}
        name="normal_login"
        className="login-form"
      >
        <div className="login-sider">
          <h1 className="login-sider-title">On Point</h1>
          <img src="" className="img" />
        </div>
        <div className="login-form-container">
          {/* <img src={logo} /> */}
          <h1 className="form-title"> SignUp</h1>
          <form>
            <Stack>
              <TextField
                sx={{ m: 0.5 }}
                id="firstname"
                required
                label="first name"
                size="small"
                type="text"
                autoFocus
                placeholder="First Name"
                // onChange={(e)=>{
                //     setSignUpFName(e.target.value)
                // }}
              />
              <TextField
                sx={{ m: 0.5 }}
                id="lastname"
                required
                label="last name"
                size="small"
                type="text"
                autoFocus
                placeholder="Last Name"
                // onChange={(e)=>{
                //     setSignUpLName(e.target.value)
                // }}
              />
              <TextField
                sx={{ m: 0.5 }}
                id="email"
                required
                label="e-mail"
                size="small"
                type="text"
                autoFocus
                placeholder="e-mail"
                // onChange={(e)=>{
                //     setSignUpEmail(e.target.value)
                // }}
              />
              <TextField
                sx={{ m: 0.5}}
                id="pass"
                required
                label="password"
                size="small"
                type="password"
                autoFocus
                placeholder="Password"
                // onChange={(e)=>{
                //     setSignUpPassword(e.target.value)
                // }}
              />
              <TextField
                sx={{ m: 0.5 }}
                id="city"
                label="city"
                size="small"
                type="text"
                autoFocus
                placeholder="city"
                // onChange={(e)=>{
                //     setSignUpLocation(e.target.value)
                // }}
              />
              <TextField
                sx={{ m: 0.5 }}
                id="postnumber"
                label="postnumber"
                size="small"
                type="text"
                autoFocus
                placeholder="postnumber"
                // onChange={(e)=>{
                //     setSignUpPostnumber(e.target.value)
                // }}
              />
              <TextField
                sx={{ m: 0.5 }}
                id="phone"
                label="phone"
                size="small"
                type="text"
                autoFocus
                placeholder="phone"
                // onChange={(e)=>{
                //     setSignUpLocation(e.target.value)
                // }}
              />
              <Button
                onClick={SignUpSubmit}
                variant="contained"
                sx={{ m: 1.5, ml: 3 }}
                size="small"
              >
                SignUp
              </Button>
            </Stack>
          </form>
        </div>
      </Box>
    </div>
  );
};



export default SignUp;
