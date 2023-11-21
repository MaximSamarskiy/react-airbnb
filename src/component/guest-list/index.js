import { Fragment } from "react";
import Heading from "../heading";

import "./index.css";
import Box from "../box";

export default function GuestList({ list }) {
  return (
    <div className="guest__block">
      <Heading>Customer reviews</Heading>

      <div className="guest__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guest">
      <span className="guest__info">
        <span className="guest__title">{guestName}</span>
        rating: {rating}
      </span>
      <span className="guest__price">{review}</span>
    </Box>
  );
}
