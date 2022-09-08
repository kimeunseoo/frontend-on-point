import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Stack, TextField, Divider, Container } from "@mui/material";
import { inputFields } from "@mui/system";


import { useState } from "react";
import PostInModal from "./PostInModal";

const AddPost = () => {
  const [postOpen, setPostOpen] = useState(false);

  const HandleOpen = () => {
    setPostOpen(true);
  };
  const HandleClose = () => {
    setPostOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "85%",
    bgcolor: "background.paper",
    borderRadius: 5,
    p: 4,
  };

  return (
    <>
      <Tooltip
        onClick={HandleOpen}
        sx={{
          position: "fixed",
          bottom: 20,
          // left: { xs: "calc(70%)", md: 30 },
          right: 20,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal sx={{width:"auto",height:"100%", zIndex:1200, position:"fixed", top:"40px", margin:"0 auto"}}
        open={postOpen}
        onClose={HandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button>
            <ClearIcon onClick={HandleClose}/>
          </Button>
          <Box>
            <PostInModal />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
