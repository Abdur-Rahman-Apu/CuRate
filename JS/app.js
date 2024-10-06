// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((countries) => {
//     fetch("https://api.fxratesapi.com/latest")
//       .then((res) => res.json())
//       .then((curate) => {
//         console.log(countries, "countries");
//         console.log(curate, "curate");

//         const curateNameArr = Object.keys(curate.rates);
//         console.log(curateNameArr.length, "cur conv api rate no");
//         const data = [];

//         const newCoun = countries.filter((country) => country.currencies);

//         newCoun.forEach((countryInfo) => {
//           console.log(countryInfo.currencies);
//           const curName = Object.keys(countryInfo.currencies)[0];

//           if (curateNameArr.includes(curName)) {
//             data.push({
//               countryName: countryInfo.name.common,
//               flagUrl: countryInfo.flags.png,
//               currencyName: curName,
//               currencySymbol: countryInfo.currencies[curName].symbol,
//             });
//           }
//         });

//         console.log(data, "new updated data");
//         console.log(data.length, "new updated data");
//       });
//   });

import init from "./modules/init/init.js";

(() => {
  init();
})();
