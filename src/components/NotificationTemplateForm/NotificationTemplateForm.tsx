import React, { useState } from "react";
import { Grid, TextField, Typography, Button } from "@mui/material";

function NotificationTemplateForm() {
  const [formData, setFormData] = useState({ name: "", subject: "", body: "" });
  const [previewText, setPreviewText] = useState({
    name: "",
    subject: "",
    body: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const updatedFormData = { ...formData, [name]: value };
    // const formattedText = `Name: ${updatedFormData.name}\nsubject: ${updatedFormData.subject}\nbody: ${updatedFormData.body}`;

    const preview = {
      name: `${updatedFormData.name}`,
      subject: `${updatedFormData.subject}`,
      body: `${updatedFormData.body}`,
    };
    setPreviewText(preview);
  };

  return (
    <div style={{backgroundColor: "#ffffff", padding:"30px", paddingBottom:"45px", borderRadius:"10px", width:"900px"}}>
      <Grid container spacing={3}>
        {/* Left side with the form */}
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Notification Type
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
              style={{ marginTop: "10px" }}
            />
            <TextField
              fullWidth
              label="Body"
              name="body"
              variant="outlined"
              multiline
              rows={4}
              value={formData.body}
              onChange={handleChange}
              style={{ marginTop: "10px" }}
            />
            <Button
              size="large"
              type="submit"
              variant="outlined"
              color="primary"
              // onClick={handlePreview}
              style={{ marginTop: "10px" }}
            >
              Cancel
            </Button>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              // onClick={handlePreview}
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              Save
            </Button>
          </form>
        </Grid>

        {/* Right side with the preview */}
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Preview
          </Typography>
          <div
            style={{
              border: "1px solid #ccc",
              paddingLeft: "8px",
              paddingTop: "8px",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "auto", // Add overflow: "auto"
              wordWrap: "break-word", // Add wordWrap: "break-word"
            }}
          >
            <Typography
              variant="body1"
              style={{ flex: "1" }}
            >
              {previewText.name}
              <br />
              {previewText.subject}
              <br />
              {previewText.body}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default NotificationTemplateForm;
