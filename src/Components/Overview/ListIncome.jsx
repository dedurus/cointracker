import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider";
import { makeStyles } from "@material-ui/styles";
//import parseISOWithOptions from "date-fns/esm/fp/parseISOWithOptions/index.js";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  incomeStyle: {
    color: "#03dac5",
  },
  text: {
    textTransform: "capitalize",
    fontSize: "15px",
    fontFamily: "Roboto",
  },

  newRow: {
    display: "inline",
  },
}));

export default function ListIncome() {
  const classes = useStyles();
  const { entries, categories } = useContext(Context);

  const sumIncome = [];
  entries.reduce(function (res, value, index) {
    const category = categories.find((x) => x.category === value.category);

    if (!res[value.category]) {
      res[value.category] = {
        category: category.category,
        amount: 0,
        type: category.type,
        icon: category.icon,
        budget: +category.budget,
      };

      if (category.type === "income") {
        sumIncome.push(res[value.category]);
      }
    }
    res[value.category].amount += parseInt(value.amount);
    return res;
  }, {});
  console.log(sumIncome);

  return (
    <div>
      {sumIncome.map((item, index) => {
        //if (item.type === "income") {
        return (
          <React.Fragment key={index}>
            <ListItem className={(classes.incomeStyle, classes.text)}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText />
              {item.type} {item.category}
              <ListItemText />
              {item.selectedDate}
              <ListItemText
                style={{ textAlign: "right" }}
                className={
                  item.type === "income"
                    ? classes.incomeStyle
                    : classes.expenseStyle
                }
              />{" "}
              {item.amount} / {item.budget}
            </ListItem>
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              <ProgressBar value={item.amount} max={item.budget} />
            </div>
          </React.Fragment>
        );
        //}
      })}
    </div>
  );
}
