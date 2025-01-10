import cn from "classnames";

import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";
import React from "react";
import styles from "./Button.module.css";

export interface IButtonProps extends MaterialButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = "" } = props;

  return (
    <MaterialButton
      {...props}
      className={cn(styles.button, className)}
      variant="contained"
      size="small"
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
