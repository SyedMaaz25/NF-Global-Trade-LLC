import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "../atoms/button";
import Arrival1 from "../assets/images/new-arrivals/sale.webp";

const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    backgroundColor: "black",
    borderRadius: "8px",
    padding: "1rem",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0, 5, 0),
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  closeIcon: {
    color: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "45%",
    marginRight: "2rem",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: "0",
      marginBottom: "1rem",
    },
  },
  textContainer: {
    flex: 1,
    textAlign: "left",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      textAlign: "center",
    },
  },
  description: {
    fontSize: "1rem",
    padding: theme.spacing(0, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      textAlign: "center",
      padding: theme.spacing(0, 0, 2, 0),
    },
  },
  button: {
    marginTop: "1rem",
    marginRight: "0.5rem",
    backgroundColor: "#ffcc00",
    color: "#000",
    "&:hover": {
      backgroundColor: "#ffb300",
    },
    textTransform: "none",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: "1rem",
    marginRight: "0.5rem",
    backgroundColor: "#444",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#333",
    },
    textTransform: "none",
    fontWeight: "bold",
  },
}));

const ModalComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000); // Show the modal after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={classes.modalBox}>
        <Container>
          <Box className={classes.content}>
            <Box className={classes.image}>
              <img src={Arrival1} alt="Skin Care" width="100%" />
            </Box>
            <Box className={classes.textContainer}>
              <Typography className={classes.title} variant="body1">
                Skin Care
              </Typography>
              <Typography className={classes.description} variant="body2">
                To get your skin silky, smooth, soft, shining, and healthy,
                start a daily skincare regimen.
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
              >
                <Button
                  variant="secondary"
                  sx={{ backgroundColor: "gray !important" }}
                >
                  Get The Deal
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Modal>
  );
};

export default ModalComponent;