import React from "react";
import Button from "../ui/button";
import Image from "next/image";

import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

import classes from "./event-item.module.css";

export default function EventItem({ title, image, date, location, id }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
          </div>
          <div className={classes.date}>
            <time>{readableDate}</time>
            <DateIcon />
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
            <AddressIcon />
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
