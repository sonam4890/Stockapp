import React from "react";
import styles from "./Button.module.css";

const button = (props) => {
  let clickFunction = props.click;
  let Text = props.children;
  let classes = [styles.Button];
  if (props.buttonNewId) {
    props.buttonNewId.map((el) => {
      if (props.id === el.symbol) {
        classes.push(styles.View);
        Text = "View";
        clickFunction = props.viewclick;
      }
    });
  }

  return (
    <div>
      <button
        className={classes.join(" ")}
        id={props.id}
        onClick={clickFunction}
      >
        {Text}
      </button>
    </div>
  );
};

export default button;
