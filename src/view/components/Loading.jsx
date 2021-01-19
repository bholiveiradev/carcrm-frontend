import React from "react";
import { Typography, Modal, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeLoading } from "../../redux/actions/loading.action";

const Loading = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer);

  return (
    <Modal
      open={loading.open}
      onClose={() => dispatch(changeLoading({ open: false }))}
      className="d-flex justify-content-center align-items-center h-100"
    >
      <div className="bg-white d-flex align-items-center rounded p-3">
        <CircularProgress size={20} />
        <Typography variant="subtitle1" className="ml-3">
          {loading.message}
        </Typography>
      </div>
    </Modal>
  );
};

export default Loading;
