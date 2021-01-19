import React from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@material-ui/core";

const Confirm = (props) => {
  const { open, title, onClose, onConfirm } = props;

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <div style={{ minWidth: "360px" }}>
        <DialogTitle disableTypography>
          <h6>{title || "Tem certeza?"}</h6>
        </DialogTitle>

        <DialogActions className="d-flex justify-content-center mb-2">
          <Button onClick={() => onClose()}>Não</Button>
          <Button
            onClick={() => {
              onClose();
              onConfirm();
            }}
            variant="contained"
            color="primary"
          >
            Sim
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default Confirm;
