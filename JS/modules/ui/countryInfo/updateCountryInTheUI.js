// reusable function to set the flag and country name into the UI
const updateCountryInTheUI = ({ flagElm, nameElm, dataType }) => {
  flagElm.src = dataType.flagUrl;
  nameElm.innerText = dataType.countryName;
};

export default updateCountryInTheUI;
