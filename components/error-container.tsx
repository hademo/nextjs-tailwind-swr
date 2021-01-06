import React from "react";
import cn from "classnames";
import styles from "./error.module.css";

interface Props {
  children: any;
}

const ErrorContainer = (props: Props) => {
  return <div className="bg-red text-white">{props.children}</div>;
};

export default ErrorContainer;
