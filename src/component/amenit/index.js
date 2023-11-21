import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "../../public/pool.svg";
import gym from "../../public/gym.svg";
import breakfast from "../../public/breakfast.svg";
import wifi from "../../public/wifi.svg";
import parking from "../../public/parking.svg";
import allowed from "../../public/allowed.svg";
import airport from "../../public/airport.svg";
import concierg from "../../public/concierg.svg";
import roomservice from "../../public/roomservice.svg";
import child from "../../public/child.svg";

export default function Amenit() {
  return (
    <Box className="amenit__block">
      <div className="amenit__header">
        <Heading border>Зручності:</Heading>

        <div className="amenit__text">
          <ListItem imageSrc={pool}>
            <span>Басейн</span>
          </ListItem>

          <ListItem imageSrc={gym}>
            <span>Спортивний зал </span>
          </ListItem>
          <ListItem imageSrc={breakfast}>
            <span>Сніданок</span>
          </ListItem>

          <ListItem imageSrc={wifi}>
            <span>Wi-Fi</span>
          </ListItem>

          <ListItem imageSrc={parking}>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>

          <ListItem imageSrc={allowed}>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>

          <ListItem imageSrc={airport}>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>

          <ListItem imageSrc={concierg}>
            <span>Консьєрж-сервіс</span>
          </ListItem>

          <ListItem imageSrc={roomservice}>
            <span>Обслуговування номерів</span>
          </ListItem>

          <ListItem imageSrc={child}>
            <span>Підходить для дітей</span>
          </ListItem>
        </div>
      </div>
    </Box>
  );
}
