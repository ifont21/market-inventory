import React, { useState, useImperativeHandle, forwardRef } from "react";
import { DialogWrapper, BlockUI } from "./withDialog.styles";

const withDialog = (WrappedComponent) => {
  const WithDialog = (props, ref) => {
    const [open, setOpenValue] = useState(false);

    const closeModal = () => setOpenValue(false);
    const openModal = () => setOpenValue(true);

    useImperativeHandle(ref, () => ({
      open: openModal,
    }));

    return (
      <React.Fragment>
        {open ? <BlockUI></BlockUI> : ""}
        {open ? (
          <DialogWrapper>
            <div className="closeBtn" onClick={closeModal}>
              CLOSE
            </div>
            <WrappedComponent closeModal={closeModal} {...props} />
          </DialogWrapper>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };

  return forwardRef(WithDialog);
};

export default withDialog;
