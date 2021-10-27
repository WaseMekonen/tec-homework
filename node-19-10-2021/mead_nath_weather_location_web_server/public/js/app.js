console.log("check this on the browser console");

dataDisplay = document.getElementById("location");
const cityInput = document.getElementById("city-input");
document.getElementById("form").addEventListener("submit", cityDisplay);

function cityDisplay(e) {
    e.preventDefault();
  const city = cityInput.value;

  axios
    .get(`/${city}`)
    .then(function (response) {
      console.log(response);
      console.log("it's good");
      if (response.status === 200) {
        console.log(response.data);
            cityInput.innerHTML=`City: ${response.data.name},
            Longitude: ${response.data.coord.lon},
            latitude:${response.data.coord.lat}`
        //   res.send(
        //     `City: ${response.data.name},
        //      Longitude: ${response.data.coord.lon},
        //     Latitude:${response.data.coord.lat}`
        //   );
      }
    })
    .catch(function (error) {
      // handle error
      console.log("request got error");
      res.render("error");
    });
}
