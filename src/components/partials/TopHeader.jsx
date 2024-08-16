import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Button } from "../../atoms/button";
import { Hidden } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  companyDetails: {
    padding: "1.3rem 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemGroup: {
    display: "flex",
    alignItems: "center",
    gap: "1.7rem",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
}));

const TopHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.companyDetails}>
      <Container>
        <Box className={classes.container}>
          <Box className={classes.itemGroup}>
            <Box className={classes.item}>
              <LocalPhoneOutlinedIcon />
              <Typography variant="body2">+13465178179</Typography>
            </Box>
            <Box className={classes.item}>
              <EmailOutlinedIcon />
              <Typography variant="body2">
                info@Fillupyourbaskets.com
              </Typography>
            </Box>
            <Box className={classes.item}>
            <LocalShippingOutlinedIcon />
            <Typography variant="body2">Free Shipping Over $50</Typography>
          </Box>
          </Box>
          <Box className={classes.item}>
            <Hidden mdDown>
          <Button variant="secondary">Register</Button>
            </Hidden>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;