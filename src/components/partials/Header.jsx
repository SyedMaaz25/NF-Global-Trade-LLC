import React from "react";
import {
  Box,
  Typography,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.webp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none !Important",
    color: "black !important",
    borderTop: "1px solid #D3D3D3",
    boxShadow: "none !Important",
    padding: "1rem 0rem",
  },
  toolBar: {
    background: "none !Important",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  navLinks: {
    display: "flex",
    gap: "1.20rem",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  drawer: {
    width: 250,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
      className={classes.drawer}
    >
      <List>
        {["Home", "About", "Comparisons", "Categories", "Cart", "Contact"].map(
          (text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
        <ListItem button>
          <ListItemText primary="Register" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.logo}>
            <img src={logo} alt={logo} width="100%" />
          </Box>
          <Box className={classes.navLinks}>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About</Typography>
            <Typography>Comparisons</Typography>
            <Box
              display="flex"
              alignItems="center"
              onClick={handleClick}
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="body1" component="h5">
                Categories
              </Typography>
              <ArrowDropDownIcon />
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Grocery</MenuItem>
              <MenuItem onClick={handleClose}>Baby</MenuItem>
              <MenuItem onClick={handleClose}>Beauty</MenuItem>
              <MenuItem onClick={handleClose}>House Hold</MenuItem>
              <MenuItem onClick={handleClose}>Health</MenuItem>
            </Menu>
            <Typography variant="body1">Cart</Typography>
            <Typography variant="body1">Contact</Typography>
          </Box>
          <Hidden mdDown>
            <Box display="flex" gap="1rem">
              <ShoppingCartOutlinedIcon />
              <HelpOutlineOutlinedIcon />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            {drawer}
          </Drawer>
        </Hidden>
      </Container>
    </AppBar>
  );
};

export default Header;