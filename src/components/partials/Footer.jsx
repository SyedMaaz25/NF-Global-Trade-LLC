import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "../../atoms/button";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { List, ListItem, ListItemText } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import payment from "../../assets/images/payment2.webp";
import logo from "../../assets/images/white-logo.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    padding: theme.spacing(5, 0, 0, 0),
    color: "white",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(8, 0, 4, 0),
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& img": {
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  contactInfo: {
    "& svg": {
      marginRight: theme.spacing(1),
    },
    "& p": {
      fontFamily: "PoppinsMedium",
    },
  },
  list: {
    "& li": {
      padding: theme.spacing(0.1, 0),
    },
    "& span": {
      fontFamily: "PoppinsMedium",
      color: theme.palette.text.accent,
    },
  },
  newsletter: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      marginTop: theme.spacing(2),
    },
  },
  socials: {
    display: "flex",
    flexDirection: "column",
    "& svg": {
      marginRight: theme.spacing(1.5),
      fontSize: "1.50rem",
    },
  },
  footerBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "left",
    },
  },
  footerItem: {
    [theme.breakpoints.down("sm")]: {
      order: 0,
    },
  },
  footerNewsletter: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  footerLogo: {
    [theme.breakpoints.down("sm")]: {
      order: 0,
    },
  },
  footerContact: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  footerLinks: {
    [theme.breakpoints.down("sm")]: {
      order: 3,
    },
  },
  footerSocials: {
    [theme.breakpoints.down("sm")]: {
      order: 4,
    },
  },
  dividerContainer: {
    padding: "2.5rem 0rem",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 0),
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid
          container
          columnSpacing={{ xs: 0, md: 10 }}
          rowSpacing={{ md: 0, xs: 4.5 }}
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={3}
            className={`${classes.footerItem} ${classes.footerLogo}`}
          >
            <Box className={classes.logoContainer}>
              <img src={logo} alt={logo} />
            </Box>
            <Box className={classes.contactInfo}>
              <Box display="flex" alignItems="center" gap="0.60rem" pb="1rem">
                <HomeIcon />
                <Typography variant="body2">
                  5900 Balcones Dr Ste 15454 AUSTIN Texas
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" pb="1rem" gap="0.60rem">
                <LocalPhoneIcon />
                <Typography variant="body2">+13465178179</Typography>
              </Box>
              <Box gap="0.60rem" display="flex" alignItems="center" pb="1rem">
                <AlternateEmailIcon />
                <Typography variant="body2">
                  info@Fillupyourbaskets.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={2}
            className={`${classes.footerItem} ${classes.footerLinks}`}
          >
            <Typography variant="body1" fontWeight="bolder">
              USEFUL LINKS
            </Typography>
            <List className={classes.list}>
              <ListItem>
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>About</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Contact</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>FAQ</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={`${classes.footerItem} ${classes.footerNewsletter}`}
          >
            <Typography variant="body1" fontWeight="bolder">
              NEWSLETTER
            </Typography>
            <Box className={classes.newsletter}>
              <Typography variant="body2" pt="0.50rem">
                Enter your email to receive the latest updates & news.
              </Typography>
              <TextField
                id="newsletter-email"
                label="Email"
                variant="standard"
                fullWidth
                placeholder="Email"
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#e41b23",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#e41b23",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#e41b23",
                  },
                  "& .MuiInputBase-input": {
                    padding: "0.70rem",
                  },
                }}
              />
              <Box pt="0.40rem">
                <Button variant="primary">Subscribe</Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            className={`${classes.footerItem} ${classes.footerSocials}`}
          >
            <Typography variant="body1" pb="1.10rem" fontWeight="bolder">
              OUR SOCIALS
            </Typography>
            <Box className={classes.socials} mb={2}>
              <Box display="flex" alignItems="center" gap="0.10rem" pb="1rem">
                <FacebookOutlinedIcon style={{ fontSize: "1.30rem" }} />
                <Typography variant="body2">Facebook</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="0.10rem" pb="1rem">
                <InstagramIcon style={{ fontSize: "1.30rem" }} />
                <Typography variant="body2">Instagram</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="0.10rem" pb="1rem">
                <XIcon style={{ fontSize: "1.30rem" }} />
                <Typography variant="body2">Twitter</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="0.10rem" pb="1rem">
                <YouTubeIcon style={{ fontSize: "1.30rem" }} />
                <Typography variant="body2">YouTube</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.dividerContainer}>
        <Divider style={{ border: "1px solid gray" }} />
        <Container>
          <Box pt="2.50rem" className={classes.footerBottom}>
            <Typography>© 2024 Copyright: fillupyourbaskets</Typography>
            <Box pt={{ xs: 2, sm: 0 }}>
              <img src={payment} alt="Payment Methods" />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;