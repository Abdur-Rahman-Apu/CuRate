export default function countryInfoMarkUp({ type, data }) {
  const { flagUrl, countryName } = data;
  return type === "base"
    ? `<div data-name="${countryName}">
      <img
      src="${flagUrl}"
      alt="This image is indicating the selected base currency's country flag image"
      class="base-currency-flag-image"
      data-name="${countryName}"
      />
      <p class="base-currency-country-name" data-name="${countryName}">${countryName}</p>
    </div>`
    : `<div data-name="${countryName}">
      <img
        src="${flagUrl}"
        alt="This image is indicating the selected base currency's country flag image"
        class="target-currency-flag-image"
        data-name="${countryName}"
      />
      <p class="target-currency-country-name" data-name="${countryName}">${countryName}</p>
    </div>`;
}
