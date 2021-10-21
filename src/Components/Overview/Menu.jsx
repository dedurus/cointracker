import React from "react";
import { Link } from "react-router-dom";

import AddEntries from "./AddEntries";
import HomeIcon from "@material-ui/icons/Home";
import WidgetsIcon from "@material-ui/icons/Widgets";
import EqualizerIcon from "@material-ui/icons/Equalizer";

export default function Menu(props) {
  return (
    <div style={props.styleDiv2}>
      <div>
        <HomeIcon fontSize="medium" />
        <p style={props.styleDiv2.p}>Overview</p>
      </div>
      <div>
        <Link to="/categories" className={props.classes.links}>
          <WidgetsIcon fontSize="medium" />
          <p style={props.styleDiv2.p}>Categories</p>
        </Link>
      </div>
      <div>
        <Link to="/statistics" className={props.classes.links}>
          <EqualizerIcon fontSize="medium" />
          <p style={props.styleDiv2.p}>Statistics</p>
        </Link>
      </div>
      <AddEntries />
    </div>
  );
}
