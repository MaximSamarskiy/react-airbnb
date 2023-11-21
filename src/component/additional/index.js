import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Additional({ house, cancell, local, host, special }) {
  return (
    <Box className="property__block">
      <div className="property__header">
        <Heading border>Additional properties</Heading>

        <div className="property__text">
          <ListItem title="House rules">
            <span>{house}</span>
          </ListItem>

          <ListItem title="Cancellation Policy">
            <span>{cancell}</span>
          </ListItem>

          <ListItem title="Local transport">
            <span>{local}</span>
          </ListItem>

          <ListItem title="Host languages">
            <span>{host}</span>
          </ListItem>

          <ListItem title="Special proposals:">
            <span>{special}</span>
          </ListItem>
        </div>
      </div>
    </Box>
  );
}
