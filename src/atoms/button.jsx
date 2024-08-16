import React from "react";
import { Button as Mbutton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    border: ` 1px ${theme.palette.primary.main} solid !important`,
    textTransform: "capitalize !Important",
    padding: `${theme.spacing(0.3, 3)} !Important`,
    borderRadius: "100px !Important",
    "&:hover": {
      background: ` ${theme.palette.secondary.main}!important`,
      color: `${theme.palette.text.primary.main} !important`,
      border: ` 1px ${theme.palette.secondary.main} solid !important`,
    },
  },
  secondaryButton: {
    background: ` ${theme.palette.secondary.main}!important`,
    textTransform: "capitalize !Important",
    padding: `${theme.spacing(0.5, 3)} !Important`,
    borderRadius: "100px !Important",
    border: ` 1px ${theme.palette.secondary.main} solid !important`,
    "&:hover": {
      border: ` 1px ${theme.palette.primary.main} solid !important`,
      background: `${theme.palette.primary.main} !important`,
    },
  },
  accentButton: {},
}));

export const Button = ({ children, variant, ...props }) => {
  const classes = useStyles();
  const buttonClass =
    variant === "primary"
      ? classes.primaryButton
      : variant === "secondary"
      ? classes.secondaryButton
      : variant === "accent"
      ? classes.accentButton
      : "";

  return (
    <Mbutton variant="contained" className={buttonClass} {...props}>
      {children}
    </Mbutton>
  );
};