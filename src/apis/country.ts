import axios from "axios";

const fieldsNeeded = ["car", "coatOfArms", "flags", "name", "currencies"];

export const fetchCountriesByName = (countryName: string) =>
  axios.get(
    `https://restcountries.com/v3.1/name/${countryName}?fields=${fieldsNeeded.join(
      ","
    )}`
  );
