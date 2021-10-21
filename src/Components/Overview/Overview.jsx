import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Panel from "./Panel";
import Menu from "./Menu";
import AddEntries from "./AddEntries";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(40),
    },
  },
  header: {
    textAlign: "left",
    background: theme.palette.grey[200],
    padding: theme.spacing(2),
  },

  links: {
    color: "white",
    textDecoration: "none",
  },
  width: {
    width: "100%",
  },
  avatarImg: {
    marginRight: "15px",
  },
}));

const styleDiv1 = {
  backgroundColor: "#6200ee",
  height: "70px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    width: "80px",
  },
  h2: {
    color: "white",
    fontFamily: "Roboto",
  },
  flex: {
    display: "flex",
  },
};

const styleDiv2 = {
  backgroundColor: "#6200ee",
  height: "70px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "fixed",
  bottom: "0",
  color: "white",
  textAlign: "center",
  fontFamily: "Roboto",
  p: {
    margin: "0px",
  },
};

export default function Overview() {
  const classes = useStyles();
  //const { img } = useContext(Provider);

  return (
    <>
      <Header styleDiv1={styleDiv1} classes={classes} />
      <Panel classes={classes} />
      <Menu classes={classes} styleDiv2={styleDiv2} />
      {<AddEntries />}
    </>
  );
}
