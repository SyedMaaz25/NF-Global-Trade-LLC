import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PaidIcon from "@mui/icons-material/Paid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import Banner1 from "../../assets/images/banners/1.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282a32",
    padding: theme.spacing(4, 0),
    color: "white",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      "& h5": {
        display: "none",
      },
      "& h4": {
        fontSize: "0.90rem",
      },
    },
  },
  icon: {
    fontSize: "2.1rem !important",
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Footer = () => {
  const classes = useStyles();

  const footerItems = [
    {
      icon: <LocalShippingIcon className={classes.icon} />,
      title: "Free Shipping & Return",
      description: "Free Nationwide Shipping",
    },
    {
      icon: <PaidIcon className={classes.icon} />,
      title: "Money Back Guarantee",
      description: "Money back gurantee",
    },
    {
      icon: <SwitchAccessShortcutAddIcon className={classes.icon} />,
      title: "Premium Stitching For",
      description: "Clothes with premium",
    },
    {
      icon: <LocalShippingIcon className={classes.icon} />,
      title: "Free Shipping & Return",
      description: "Free Nationwide Shipping",
    },
  ];

  return (
    <Box mt="5rem">
      <img
        src={Banner1}
        alt="Promotional banner"
        style={{ objectFit: "cover", width: "100%" }}
      />
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={4}>
            {footerItems.map((item, index) => (
              <Grid item key={index} xs={6} md={3}>
                <Box className={classes.iconBox}>
                  {item.icon}
                  <Box>
                    <Typography
                      variant="body1"
                      component="h4"
                      className={classes.heading}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" component="h5">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;