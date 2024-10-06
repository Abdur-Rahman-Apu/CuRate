export default function countryInfoMarkUp({ type, data }) {
  const { flagUrl, countryName } = data;
  return type === "base"
    ? `<div>
      <img
        src="${flagUrl}"
        alt="This image is indicating the selected base currency's country flag image"
        class="base-currency-flag-image"
      />
      <p class="base-currency-country-name">${countryName}</p>
    </div>`
    : `<div>
      <img
        src="${flagUrl}"
        alt="This image is indicating the selected base currency's country flag image"
        class="target-currency-flag-image"
      />
      <p class="target-currency-country-name">${countryName}</p>
    </div>`;
}
