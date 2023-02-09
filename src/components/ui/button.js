import Link from "next/link";
import React from "react";

import classes from "./button.module.css";

export default function Button({ link, children, onClick }) {
  return link ? (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}
