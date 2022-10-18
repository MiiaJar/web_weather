import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/weather";

function App() {
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        alert(error);
      }
    );
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  //jos sijaintitietoja ei saada, eli ovat vielä null, näytetään Loading...
  return (
    <>
      <Weather lat={position.lat} lng={position.lng} />
    </>
  );
}
export default App;
