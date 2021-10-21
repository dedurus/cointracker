import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../../Provider";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  expenseStyle: {
    color: "red",
  },
  text: {
    textTransform: "capitalize",
    fontSize: "15px",
    fontFamily: "Roboto",
  },
}));

export default function Listexpenses() {
  const classes = useStyles();

  const { entries, categories } = useContext(Context);

  const sumExpense = [];
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

      if (category.type === "expense") {
        sumExpense.push(res[value.category]);
      }
    }
    res[value.category].amount += parseInt(value.amount);
    return res;
  }, {});

  return (
    <div>
      {sumExpense.map((item, index) => {
        // const { type, amount, category, icon, selectedDate } = item

        if (item.type === "expense") {
          return (
            <React.Fragment key={index}>
              <ListItem className={(classes.incomeStyle, classes.text)}>
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText /> {item.type} {item.category}
                <ListItemText /> {item.selectedDate}
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
        }
      })}
    </div>
  );
}
