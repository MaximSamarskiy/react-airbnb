import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import people from "../../public/people.svg";
import bedroom from "../../public/bedroom.svg";
import bed from "../../public/bed.svg";
import bath from "../../public/bath.svg";

export default function Property({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="property__block">
      <div className="property__header">
        <Heading border>Деталі властивості:</Heading>

        <div className="property__text">
          <ListItem imageSrc={people}>
            <span>{guests}</span>
            <span>гості</span>
          </ListItem>

          <ListItem imageSrc={bedroom}>
            <span>{bedrooms}</span>
            <span>спальня</span>
          </ListItem>
          <ListItem imageSrc={bed}>
            <span>{beds}</span>
            <span>ліжко</span>
          </ListItem>

          <ListItem imageSrc={bath}>
            <span>{baths}</span>
            <span>ванна кімната</span>
          </ListItem>
        </div>
      </div>
    </Box>
  );
}
