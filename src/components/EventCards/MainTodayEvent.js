import React from 'react'
// Main -> Today 
function MainTodayEventList() {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <BookmarkBorder
        sx={{ width: 22, display: "flex", alignItems: "flex-end" }}
      />
      <CardMedia
        component="img"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/7/78/1927_Boris_Bilinski_%281900-1948%29_Plakat_f%C3%BCr_den_Film_Metropolis%2C_Staatliche_Museen_zu_Berlin.jpg"
        alt="Filmplakat Metropolis"
      />
      <Box sx={{ display: "flex", alignItems: "left" }}>
        <LocationOn sx={{ width: 22, marginLeft: 0.5 }} />
        <Typography
          variant="body1"
          component="p"
          marginLeft={0.5}
          alignItems="left"
        >
          event location
        </Typography>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          event description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/Dashboard">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  )
}

export default MainTodayEventList;