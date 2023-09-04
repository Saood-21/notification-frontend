import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
} from "@mui/material";

function CreateForm() {
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

    // Close the modal after submission
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Modal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: "10px" } }}
      >
        <DialogTitle>
          <Typography variant="h6" align="center" paddingTop={2} >Add/Edit Application</Typography>
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
