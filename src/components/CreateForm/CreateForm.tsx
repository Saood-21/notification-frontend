import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
  Icon,
} from "@mui/material";

interface Props{
  onAdd:(appInfo:{name:string, description:string}) => void
}

function CreateForm({onAdd}:Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Perform actions with the form data (e.g., send it to a server)
    console.log("Name:", name);
    console.log("Description:", description);
    onAdd({name:name, description:description})
    handleClose();
  };

  return (
    <div style={{width:"30px"}}>
      <div  onClick={handleClickOpen}>
        <Icon>
          <AddIcon style={{fontSize: '30px'}}/>
        </Icon>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: "10px" } }}
      >
        <DialogTitle>
          <Typography variant="h6" align="center" paddingTop={2}>
            Add/Edit Application
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            paddingTop="10px"
          >
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateForm;
