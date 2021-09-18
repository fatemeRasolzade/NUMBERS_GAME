import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Refresh, TrendingFlat } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 3),
  },
}));

export default function WinModal({open, handleClose}) {

  const classes = useStyles();

  const reset = () => {
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
        >
        <Fade in={open}>
          <div className={classes.paper}>
            
            <p>End game</p>
            <button onClick={reset}>Ok</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}