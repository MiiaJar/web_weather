import axios from "axios";
import { useEffect, useState } from "react";

const api_url = "https://api.openweathermap.org/data/2.5/weather?";
const icon_url = "https://openweathermap.org/img/wn/";
const api_key = "63a779d6015715df3712151316f78a3e"; // poista tämä kun palautat!

export default function Weather({ lat, lng }) {
  const [temp, setTemp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [direction, setDirection] = useState(0);
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const address =
      api_url +
      "lat=" +
      lat +
      "&lon=" +
      lng +
      "&units=metric" +
      "&appid=" +
      api_key;

    console.log(address);

    axios
      .get(address)
      .then((response) => {
        console.log(response.data);
        setTemp(response.data.main.temp);
        setSpeed(response.data.main.speed);
        setDirection(response.data.wind.deg);
        setDesc(response.data.weather[0].desc);
        setIcon(icon_url + response.data.weather[0].icon + "@2x.png");
        console.log(icon_url + response.data.weather[0].icon + "@2x.png");
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="box">
      <h3> Weather in your current location:</h3>
      <p>{temp} C&#176;</p>
      <p>
        {speed} m/s {direction} degrees
      </p>
      <p>{desc}</p>
      <img src={icon} alt="" />
    </div>
  );
}
