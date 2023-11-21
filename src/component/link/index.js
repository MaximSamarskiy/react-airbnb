import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function NavLink() {
  return (
    <Box className="link">
      <div className="link__header">
        <Heading border>Attractions nearby</Heading>

        <div className="link__text">
          <ListItem>
            <a href="/">Crystal Beach</a>
          </ListItem>

          <ListItem>
            <a href="/">Island of waterfalls</a>
          </ListItem>

          <ListItem>
            <a href="/">Tropical forest hiking trails</a>
          </ListItem>

          <ListItem>
            <a href="/"> Cultural tours of the village</a>
          </ListItem>
        </div>
      </div>
    </Box>
  );
}
