import React from "react";
import { changeAlert } from "../../redux/actions/alert.action";
import { Modal, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { MdError, MdCheckCircle } from "react-icons/md";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alertReducer);

  setTimeout(() => dispatch(changeAlert({open: false})), alert.time);

  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <div className="bg-white rounded d-flex align-items-center p-4">
        {alert.class === "success" && (
          <MdCheckCircle
            style={{ fontSize: "2.5rem" }}
            className="text-success"
          />
        )}

        {alert.class === "error" && (
          <MdError
            style={{ fontSize: "2.5rem" }}
            className="text-danger"
          />
        )}
        <Typography variant="subtitle2" className="font-weight-bold ml-3">
          {alert.message}
        </Typography>
      </div>
    </Modal>
  );
};

export default Alert;
