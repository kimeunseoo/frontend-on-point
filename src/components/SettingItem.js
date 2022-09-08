import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Fab,
  InputLabel,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CreateIcon from "@mui/icons-material/Create";
import DoneIcon from "@mui/icons-material/Done";
import Badge from "@mui/material/Badge";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import com from "./../bridge/fetch.js";
import { useState } from "react";
import { useLayoutEffect } from "react";

const SettingItem = () => {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEMail, setInputEMail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputPCode, setInputPCode] = useState("");
  const [inputInfo, setInputInfo] = useState("");

  function onlyFile(value) {
    let ret = "";
    // *** //
    for (let x = 0; x < value.length; x++) {
      ret += value[x];
      if (value[x] == "/") ret = "";
    }
    // *** //
    return ret;
  }

  useLayoutEffect(() => {
    const desc = document.getElementById("outlined-name");
    const fname = document.getElementById("fname");
    const sname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const city = document.getElementById("city");
    const pcode = document.getElementById("pcode");
    // *** //
    const uid = sessionStorage.getItem("userid");
    // *** //
    com(`https://wbs-backend-finalproject.herokuapp.com/${uid}`, function (json) {
      /*fname.value = json[0].fname;
      sname.value = json[0].sname;
      email.value = json[0].email;
      phone.value = json[0].phone;
      city.value = json[0].location;
      pcode.value = json[0].pcode;
      desc.value = json[0].aboutme;*/
      // *** //
      setInputFirstname(json[0].fname);
      setInputLastname(json[0].sname);
      setInputEMail(json[0].email);
      setInputPhone(json[0].phone);
      setInputCity(json[0].location);
      setInputPCode(json[0].pcode);
      setInputInfo(json[0].aboutme);
    });
    // *** //
    let lang = document.getElementById("langlist");
    const mode = document.getElementById("dmode");
    const show = document.getElementById("showc");
    // *** //
    com(`https://wbs-backend-finalproject.herokuapp.com/setup/loadgen/${uid}`, function (json) {
      if (json[0].langkey === "de") lang.innerHTML = "German";
      else lang.innerHTML = "English";
      // *** //
      mode.checked = json[0].style;
      show.checked = json[0].showcomments;
    });
    // *** //
    for (let avtr = 0; avtr < 17; avtr++) {
      document
        .getElementById(`avatar-icon-${avtr}`)
        .addEventListener("click", (e) => {
          if (e.target.src != null && e.target.src != "") {
            document.getElementById("avatarElement").src = e.target.src;
            sessionStorage.setItem("userlogo", e.target.src);
            console.log(e.target.src);
            setAvatarFotos(e.target.src);
          }
        });
    }
  }, []);
  const [AvatarFotos, setAvatarFotos] = useState(null);
  return (
    <>
      <Box>
        <Typography variant="h6">SETTINGS</Typography>
      </Box>
      <Grid container columns={12}>
        <Grid item xs={12} sx={{ m: "0 auto", mt: 3 }}>
          <Box
            sx={{
              width: "500px",
              height: "400px",
              maxWidth: 400,
              m: "0 auto",
              mt: "30px",
              p: 0,
            }}
            p={2}
          >
            <Card sx={{ width: 420 }}>
              <Typography sx={{ fontSize: "10px", fontWeight: "bold", p: 2 }}>
                Profile Settings
              </Typography>
              <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
                {/* PROFILE PHOTO */}
                <Badge
                  sx={{ display: "none" }}
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      title="Click to select a picture from your machine"
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        name="MyImage"
                        onChange={(e) => {}}
                      />
                      <PhotoCameraIcon
                        type="file"
                        id="photo"
                        sx={{
                          border: "5px solid white",
                          backgroundColor: "#ff558f",
                          borderRadius: "50%",
                          padding: ".2rem",
                          width: 35,
                          height: 35,
                        }}
                      >
                        {" "}
                      </PhotoCameraIcon>
                    </IconButton>
                  }
                >
                  {" "}
                </Badge>
                <img
                  id="avatarElement"
                  src={
                    sessionStorage.getItem("userlogo")
                      ? sessionStorage.getItem("userlogo")
                      : `https://wbs-backend-finalproject.herokuapp.com/public/none.png`
                  }
                  style={{ height: "100px", margin: "1.5em" }}
                />
                <Typography id="uname">
                  {sessionStorage.getItem("username")}
                </Typography>
              </Grid>
              <Typography>&nbsp;&nbsp;&nbsp;&nbsp; Choose your Avatar: </Typography>
              <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
                {/* <Avatar id = "avatar-icon-0" src = "https://wbs-backend-finalproject.herokuapp.com/public/boy.png"></Avatar>
                  <Avatar id = "avatar-icon-1" src = "https://wbs-backend-finalproject.herokuapp.com/public/boy(1).png"></Avatar>
                  <Avatar id = "avatar-icon-2" src = "https://wbs-backend-finalproject.herokuapp.com/public/boy(2).png"></Avatar>
                  <Avatar id = "avatar-icon-3" src = "https://wbs-backend-finalproject.herokuapp.com/public/boy(3).png"></Avatar>
                  <Avatar id = "avatar-icon-4" src = "https://wbs-backend-finalproject.herokuapp.com/public/boy(4).png"></Avatar>
                  <Avatar id = "avatar-icon-5" src = "https://wbs-backend-finalproject.herokuapp.com/public/female.png"></Avatar>
                  <Avatar id = "avatar-icon-6" src = "https://wbs-backend-finalproject.herokuapp.com/public/female(1).png"></Avatar>
                  <Avatar id = "avatar-icon-7" src = "https://wbs-backend-finalproject.herokuapp.com/public/female(2).png"></Avatar>
                  <Avatar id = "avatar-icon-8" src = "https://wbs-backend-finalproject.herokuapp.com/public/girl.png"></Avatar>
                  <Avatar id = "avatar-icon-9" src = "https://wbs-backend-finalproject.herokuapp.com/public/girl(1).png"></Avatar>
                  <Avatar id = "avatar-icon-10" src = "https://wbs-backend-finalproject.herokuapp.com/public/girl(2).png"></Avatar>
                  <Avatar id = "avatar-icon-11" src = "https://wbs-backend-finalproject.herokuapp.com/public/girl(3).png"></Avatar>
                  <Avatar id = "avatar-icon-12" src = "https://wbs-backend-finalproject.herokuapp.com/public/girl(4).png"></Avatar>
                  <Avatar id = "avatar-icon-13" src = "https://wbs-backend-finalproject.herokuapp.com/public/girl(5).png"></Avatar>
                  <Avatar id = "avatar-icon-14" src = "https://wbs-backend-finalproject.herokuapp.com/public/woman.png"></Avatar>
                  <Avatar id = "avatar-icon-15" src = "https://wbs-backend-finalproject.herokuapp.com/public/woman(1).png"></Avatar>
                  <Avatar id = "avatar-icon-16" src = "https://wbs-backend-finalproject.herokuapp.com/public/woman(2).png"></Avatar>
                  <Avatar id = "avatar-icon-17" src = "https://wbs-backend-finalproject.herokuapp.com/public/man.png"></Avatar>
                  <Avatar id = "avatar-icon-18" src = "https://wbs-backend-finalproject.herokuapp.com/public/man(1).png"></Avatar>
                  <Avatar id = "avatar-icon-19" src = "https://wbs-backend-finalproject.herokuapp.com/public/man(2).png"></Avatar>
                  <Avatar id = "avatar-icon-20" src = "https://wbs-backend-finalproject.herokuapp.com/public/man(3).png"></Avatar>
                  <Avatar id = "avatar-icon-21" src = "https://wbs-backend-finalproject.herokuapp.com/public/man(4).png"></Avatar>
                  <Avatar id = "avatar-icon-22" src = "https://wbs-backend-finalproject.herokuapp.com/public/man(9).png"></Avatar>
                  <Avatar id = "avatar-icon-23" src = "https://wbs-backend-finalproject.herokuapp.com/public/male.png"></Avatar>
                  <Avatar id = "avatar-icon-24" src = "https://wbs-backend-finalproject.herokuapp.com/public/glasses.png"></Avatar>
                  <Avatar id = "avatar-icon-25" src = "https://wbs-backend-finalproject.herokuapp.com/public/grandfather.png"></Avatar>
                  <Avatar id = "avatar-icon-26" src = "https://wbs-backend-finalproject.herokuapp.com/public/grandmother.png"></Avatar> */}

                <Avatar
                  id="avatar-icon-0"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/anonymous.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-1"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/boy1.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-2"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/boy2.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-3"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/boy3.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-4"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/dertestboy.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-5"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/girl1.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-6"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/girl2.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-7"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/girl3.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-8"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/girl4.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-9"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/man1.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-10"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/man2.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-11"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/man3.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-12"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/man4.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-13"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/woman1.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-14"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/woman2.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-15"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/woman3.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-16"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/woman4.png"
                ></Avatar>
                <Avatar
                  id="avatar-icon-17"
                  src="https://wbs-backend-finalproject.herokuapp.com/public/woman5.png"
                ></Avatar>
              </CardContent>

              <CardContent>
                <TextField
                  id="fname"
                  label="First Name"
                  variant="standard"
                  value={inputFirstname}
                  onChange={(event) => setInputFirstname(event.target.value)}
                  sx={{ width: "50%" }}
                />
                <TextField
                  id="lname"
                  label="Last Name"
                  variant="standard"
                  value={inputLastname}
                  onChange={(event) => setInputLastname(event.target.value)}
                  sx={{ width: "50%" }}
                />
                <br />
                <TextField
                  id="email"
                  label="Email"
                  value={inputEMail}
                  onChange={(event) => setInputEMail(event.target.value)}
                  variant="standard"
                  sx={{ width: "100%" }}
                />
                <br />
                <TextField
                  id="phone"
                  label="Phone Number"
                  value={inputPhone}
                  onChange={(event) => setInputPhone(event.target.value)}
                  variant="standard"
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="city"
                  label="City"
                  variant="standard"
                  value={inputCity}
                  onChange={(event) => setInputCity(event.target.value)}
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="pcode"
                  label="Postcode"
                  variant="standard"
                  value={inputPCode}
                  onChange={(event) => setInputPCode(event.target.value)}
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="outlined-name"
                  variant="standard"
                  label="Info"
                  size="small"
                  sx={{ width: "100%" }} // value={name}
                  // onChange={handleChange}
                  value={inputInfo}
                  onChange={(event) => setInputInfo(event.target.value)}
                />
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{ m: 1.5, ml: 3, backgroundColor: "black" }}
                  size="small"
                  onClick={() => {
                    const avatar = onlyFile(
                      document.getElementById("avatarElement").src
                    );
                    const desc = document.getElementById("outlined-name").value;
                    const fname = document.getElementById("fname").value;
                    const sname = document.getElementById("lname").value;
                    const email = document.getElementById("email").value;
                    const phone = document.getElementById("phone").value;
                    const city = document.getElementById("city").value;
                    const pcode = document.getElementById("pcode").value;

                    const uid = sessionStorage.getItem("userid");
                    console.log(
                      `https://wbs-backend-finalproject.herokuapp.com/setup/user/${uid}/${fname}/${sname}/${email}/${phone}/${city}/${pcode}/${desc}/${avatar}`
                    );
                    com(
                      `https://wbs-backend-finalproject.herokuapp.com/setup/user/${uid}/${fname}/${sname}/${email}/${phone}/${city}/${pcode}/${desc}/${avatar}`,
                      function (e) {}
                    );
                  }}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/*
        <Grid item xs={7}>
          <Grid item xs={5} sx={{ m: "0 auto", mt: 3 }}>
            <Box
              sx={{ width: "500px", height: "400px", m: "0 auto", p: 0 }}
              p={2}
            >
              <Card sx={{ minWidth: 1, maxWidth: 360, width: 420 }}>
                <Typography sx={{ fontSize: "10px", fontWeight: "bold", p: 2 }}>
                  display Setting
                </Typography>

                <CardContent
                  sx={{ display: " flex", justifyContent: " space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: "bold", p: 2 }}
                  >
                    Language
                  </Typography>{" "}
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Language</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="langlist"
                      // value={age}
                      label="county"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}> German </MenuItem>
                      <MenuItem value={20}> English</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
                <CardContent
                  sx={{ display: " flex", justifyContent: " space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: "bold", p: 2 }}
                  >
                    Darkmode
                  </Typography>{" "}
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked id="dmode" />}
                      label=""
                    />
                  </FormGroup>
                </CardContent>
                <CardContent
                  sx={{
                    display: " flex",
                    justifyContent: " space-between",
                    m: 0,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: "bold", p: 2 }}
                  >
                    Show Comment
                  </Typography>{" "}
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked id="showc" />}
                      label=""
                    />
                  </FormGroup>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ m: 1.5, ml: 3 }}
                size="small"
                onClick={() => {
                  let lang = document.getElementById("langlist").innerHTML;
                  const mode = document.getElementById("dmode").checked;
                  const show = document.getElementById("showc").checked;

                  if (lang.trim()[0] === "G" || lang.trim()[0] === "D")
                    lang = "de";
                  else lang = "en";

                  const uid = sessionStorage.getItem("userid");

                  com(
                    `https://wbs-backend-finalproject.herokuapp.com/setup/general/${uid}/${mode}/${lang}/${show}/0/0/0`,
                    function (e) {}
                  );
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ m: 1.5, ml: 3 }}
                size="small"
                onClick={() => {
                  const uid = sessionStorage.getItem("userid");

                  com(
                    `https://wbs-backend-finalproject.herokuapp.com/setup/general/${uid}/false/en/false/0/0/0`,
                    function (e) {}
                  );
                }}
              >
                Discard
              </Button>
            </Box>
          </Grid>
        </Grid>
        */}
      </Grid>
    </>
  );
};

export default SettingItem;
