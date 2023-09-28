import { useEffect, useState } from "react";

export const HomePageHooks = () => {
  useEffect(() => {
    searchOnClick();
    console.log("useeffect click")
  }, []);

  const [search, setSearch] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [value, setValue] = useState("℃");
  const [bkgImage, setBkgImage] = useState(images[4]);
  const [errorOccured, setErrorOccured] = useState(false);
  const [temp, setTemp] = useState();

  const api = {
    key: "bdb473842775aed21cdcab91f52191b2",
  }

  const searchOnClick = () => {
    console.log("clicked")
    setErrorOccured(false)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          return setErrorOccured(true);
        }
      })
      .then(result => {
        setWeather(result);
        console.log(result);
        setTemp((result.main.temp - 273).toFixed(2) + "℃");

        if (result.weather[0].main === "Clear" || result.weather[0].main === "Sunny") {
          setBkgImage(images[1]);
        } else if (result.weather[0].main === "Clouds") {
          setBkgImage(images[2]);
        } else if (result.weather[0].main === "Rain") {
          setBkgImage(images[0]);
        }
        else if (result.weather[0].main === "Mist" || result.weather[0].main === "Haze") {
          setBkgImage(images[5]);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const tempUnitOnChange = (event) => {
    setValue(event.target.value)
    // change the units of temp in if condition
    if (value === "°F") {
      setTemp((weather.main.temp - 273).toFixed(2) + "℃");
    } else if (value === "℃") {
      setTemp(((weather.main.temp - 273.15) * 9 / 5 + 32).toFixed(2) + "°F");
    }
  }

  return { search, weather, value, bkgImage, errorOccured, temp, setSearch, searchOnClick, tempUnitOnChange }
}

let images = [
  //rainy
  "https://img.freepik.com/free-vector/condensation-water-drops-black-window-background-rain-droplets-with-light-reflection-dark-glass-surface-realistic-3d-vector-illustration_107791-4197.jpg?w=1060&t=st=1695880000~exp=1695880600~hmac=f8f151b90a3b4cbbc794b412777ec5903e84806d8d80eb04c05a704b390523db",
  //sunny
  "https://img.freepik.com/free-photo/field-with-clouds_1160-879.jpg?w=740&t=st=1695804537~exp=1695805137~hmac=cbc16d0896ba13e9edb94b89eff121f5e6fe626919a43047f6ddf520c9cb0785",
  //cloudy
  "https://img.freepik.com/free-photo/dramatic-landscape-view-with-sun-rays-shining-through-dark-cloudy-sky_181624-45676.jpg?w=996&t=st=1695869946~exp=1695870546~hmac=90810492a8b9363b4bef9b2c2b2c11e10010973f2cad1826bef66892f813f147",
  //snow
  "https://img.freepik.com/free-photo/view-snowy-mountain-fir-trees-with-blue-sky-background_9083-8044.jpg?w=996&t=st=1695804679~exp=1695805279~hmac=264445b6b2605f4afa4e122f06a8c46a1dbaee07555de7daae1cb8a439193c97",
  //few clouds
  "https://img.freepik.com/free-photo/field-with-clouds_1160-879.jpg?w=740&t=st=1695804537~exp=1695805137~hmac=cbc16d0896ba13e9edb94b89eff121f5e6fe626919a43047f6ddf520c9cb0785",
  //mist, haze
  "https://img.freepik.com/free-photo/rural-countryside-landscape-transylvania-region-romania-mist-covered-hills_181624-42189.jpg?w=996&t=st=1695869801~exp=1695870401~hmac=ae9142eab489402ce4e53381ce76efebfc7a21ea8fdf05076614ca12d7a1ec2e"
]