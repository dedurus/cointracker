import React from "react";
import { List, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ListIncome from "./ListIncome";
import ListExpences from "./ListExpences";
import ListEntries from "./ListEntries";

export default function OverviewPanel(props) {
  return (
    <div className={props.classes.root}>
      <Paper elevation={6}>
        <Typography className={props.classes.header}>Income</Typography>

        <List>
          {" "}
          <ListIncome />
        </List>
      </Paper>
      <Paper elevation={6}>
        <Typography className={props.classes.header}>Expences</Typography>

        <List>
          <ListExpences />
        </List>
      </Paper>
      <Paper elevation={6}>
        <Typography className={props.classes.header}>Entries</Typography>

        <List>
          <ListEntries />
        </List>
      </Paper>
    </div>
  );
}
