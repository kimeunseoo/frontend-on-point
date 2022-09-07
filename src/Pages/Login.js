import "./login.css";
import { Input, Button, TextField , Grid, Link, Typography } from "@mui/material";
import { React, useState } from "react";
import { Box, Stack} from "@mui/system";
import axios from "axios";
// import Axios from "axios";

//   const [informationlist, setInformationList]=useState([]);

//   const addInformation = () => {
//     Axios.post("https://wbs-backend-finalproject.herokuapp.com/login", {
//       name: name,
//       age: age,
//       city: city,
//       position: position,
//       wage: wage,
//     }).then(() => {
//       console.log("success");
//     });
//   };
//   const displayInfo = () => {
//     console.log(name +  age + city + position + wage);
//   }

//   const getInformation = () => {
//     Axios.get("http://localhost:8000/getinformation").then((res)=>{
//         console.log(res)
//     })
//   }

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);

  // const addInformation = () => {
  //     Axios.post("https://wbs-backend-finalproject.herokuapp.com/login", {
  //       name: name,
  //       age: age,
  //       city: city,
  //       position: position,
  //       wage: wage,
  //     }).then(() => {
  //       console.log("success");
  //     });
  //   };
  // const requestOptions = {
  //   method : "POST",
  //   headers : {"content-type":"application/json"},
  //   body:JSON.stringify({
  //     // username:"ben",
  //     // password:"chicken"
  //     username: loginUser.current.value,
  //     password: loginPw.current.value,
  //   }),
  // };
  // const LoginGet = () =>{
  //   Axios.get('https://wbs-backend-finalproject.herokuapp.com/login/mail/pass', function(json){
  //     if(json.length > 0)

  //   })
  // }
  // const getFetchLogin = () => {
  //    fetch('https://wbs-backend-finalproject.herokuapp.com/login/mail/pass', function(json){
  //     if(json.length > 0 ){
  //       console.log(json)
  //       sessionStorage.setItem("logged", 1)
  //     }else{
  //       sessionStorage.setItem("logged", 0)
  //     }
  //    })

  // };

  const loginSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    console.log(`https://wbs-backend-finalproject.herokuapp.com/login/${email.value}/${password.value}`)
    fetch(`https://wbs-backend-finalproject.herokuapp.com/login/${email.value}/${password.value}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.length > 0) {
          sessionStorage.setItem("logged", "1");
          sessionStorage.setItem("userid", json[0].id);
          sessionStorage.setItem("username", json[0].fname + " " + json[0].sname);
          sessionStorage.setItem("userlogo", json[0].logo );
        } else {
          sessionStorage.setItem("logged", "0");
          sessionStorage.setItem("userid","" );
          sessionStorage.setItem("username","" );
          sessionStorage.setItem("userlogo", "" );
        }
        window.location.href = "http://localhost:3000/"
      });

    // fetch('https://wbs-backend-finalproject.herokuapp.com/login/mail/pass', function(json){
    //   if(json.length > 0 ){
    //     console.log(json)
    //     sessionStorage.setItem("logged", 1)
    //   }else{
    //     sessionStorage.setItem("logged", 0)
    //   }
    //  })

    // if (email.value == "abc@gmail.com" && password.value == "12345") {
    //   sessionStorage.setItem("emailData", "abc@gmail.com");
    //   sessionStorage.setItem("passwordData", "12345");
    // }
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
          <h1 className="form-title"> LOGIN</h1>
          <form>
            <Stack>
              <TextField
                sx={{ m: 1 }}
                id="email"
                label="e-mail"
                size="small"
                type="text"
                set
                placeholder="e-mail"
              />
              <TextField
                sx={{ m: 1 }}
                id="pass"
                label="password"
                size="small"
                type="password"
                placeholder="Password"
              />
              <Grid container>
             
              <Grid item xs={12}>
                <Link href="/signup" style={{ cursor: "pointer" }} >
             <Typography sx={{textAlign:"center"}}>  Don't have an account? Sign Up!</Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
              <Button
                onClick={loginSubmit}
                variant="contained"
                sx={{ m: 1.5, ml: 3 }}
                size="small"
              >
                Log in
              </Button>
              </Grid>
            </Grid>
              
            </Stack>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Login;
