import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import Logo from "../Logo/Logo";

export default function Header(props) {
  console.log("props: ", props);
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setImg(data.results));
  }, []);

  return (
    <Box>
      <div style={props.styleDiv1}>
        <div style={props.styleDiv1.flex}>
          <div style={props.styleDiv1.div}>
            <Logo />
          </div>
          <h2 style={props.styleDiv1.h2}> Overview </h2>
        </div>
        {img.map((el) => {
          return (
            <Avatar
              key={el.picture.thumbnail}
              className={props.classes.avatarImg}
            >
              <img src={el.picture.thumbnail} alt="avatar" />
            </Avatar>
          );
        })}
      </div>
    </Box>
  );
}
