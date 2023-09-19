import { Dialog, DialogContent, Icon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";
import NotificationTemplateForm from "../components/NotificationTemplateForm/NotificationTemplateForm";

const NotificationTemplateContainer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ width: "30px" }}>
        <div onClick={handleClickOpen}>
          <Icon>
            <AddIcon style={{ fontSize: "30px" }} />
          </Icon>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: { borderRadius: "10px", maxWidth: "1000px", width: "100%" },
          }}
        >
          <DialogContent>
            <div>
              <NotificationTemplateForm></NotificationTemplateForm>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default NotificationTemplateContainer;
