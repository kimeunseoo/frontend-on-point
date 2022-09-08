import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


function EventCardBox( data ) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
      <div>
          {/* <div class="eventcardbox">
          ${data.data.foto1}
            <h3>${data.data.location}</h3>
            <h4>${data.data.ondate}</h4>
            <div class = "address">${data.data.addressinfo}</div>
            <div class = "informs">${data.data.description}</div>
          </div> */}

          <Card sx={{ maxWidth: 325, m:1}}>
      <CardMedia
      sx={{cursor:"pointer"}}
        component="img"
        alt="green iguana"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        //  image="{data.data.foto1}"
         image={data.data.foto1}
         onClick={(e) => { navigate(`/search/${data.data.id}`) }}
      />
      <CardContent sx={{ overflow:"hidden", height:130}}>
        <Typography gutterBottom variant="h6"  sx={{fontSize:""}} >
        {data.data.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="8px">
        ${data.data.ondate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ${data.data.addressinfo}
        </Typography>
      </CardContent>
      {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      <CardActions>
        <Button onClick={(e) => {  navigate(`/search/${data.data.id}`) }} size="small">Details</Button>  
      </CardActions>
    </Card>

          
      </div>
    );
}

export default EventCardBox;
