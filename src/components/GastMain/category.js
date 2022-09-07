import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Category = () => {
  return (
    <>
      <Grid item xs={2}>
        <Card elevation={2}>
          <img
            src="https://www.goethe.de/resources/files/jpg1159/press-image-3-anselm-kiefer-essence-eksistence-artipelag-photo-jean-baptiste-beranger1-formatkey-jpg-w1022.jpg"
            className="Category-img"
            alt="Anselm Kiefer Austellung"
          />

          <Box paddingX={1}>
            <Typography variant="subtitle2" component="h5">
              Mehr Info
            </Typography>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default Category;
